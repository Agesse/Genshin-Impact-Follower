import { Component, OnInit } from '@angular/core';
import { BattlepassService } from 'src/app/services/battlepass.service';
import {
  BattlepassMetadata,
  BattlepassUpdateData,
  BattlepassWeekData,
  QuestInstance,
  QuestMetadata,
} from 'src/app/types/battlepass.types';
import {
  battlepassMetadataMock,
  battlepassUpdateDataMock,
  battlepassWeekDataMock,
} from 'src/mocks/battlepass.mock';

interface BattlepassWeek {
  weekNumber: number;
  weekLabel: string;
}

@Component({
  selector: 'app-battlepass-vue',
  templateUrl: './battlepass.component.html',
  styleUrls: ['./battlepass.component.css'],
})
export class BattlepassVueComponent implements OnInit {
  bpMetadata: BattlepassMetadata;
  bpLvlPourcent: number;

  bpDailyQuests: QuestMetadata[] = [];
  bpWeeklyQuests: QuestMetadata[] = [];
  bpMonthlyQuests: QuestMetadata[] = [];

  bpWeekData: BattlepassWeekData;
  bpWeekList: BattlepassWeek[] = [];
  bpCurrentSelectedWeek: number;

  constructor(private battlepassService: BattlepassService) {}

  ngOnInit(): void {
    this.fetchBattlepassMetadata();
  }

  onClickResetWeek(): void {
    this.bpCurrentSelectedWeek = this.bpMetadata.currentWeek;
    this.fetchBattlepassWeekData();
  }

  /**
   * When checking a quest, calculate new quest's status and send the updated data.
   * @param quest Quest to update.
   */
  onQuestCheck(quest: QuestInstance): void {
    let newStatus = quest.status;
    newStatus++;
    newStatus = newStatus > 2 ? 0 : newStatus;
    quest.status = newStatus;
    this.updateBattlepassWeekData(quest);
  }

  /**
   * Update battlepass lvl and xp after checking a quest. todo: real data
   * @param questUpdated
   */
  updateBattlepassWeekData(questUpdated: QuestInstance) {
    this.battlepassService
      .updateBattlepassWeekData(this.bpCurrentSelectedWeek, questUpdated)
      .subscribe(
        (data: BattlepassUpdateData) => {
          this.bpWeekData.bpProgression = data;
          this.updateBattlepassLvlPourcent();
        },
        (error) => {
          this.bpWeekData.bpProgression = battlepassUpdateDataMock;
          this.updateBattlepassLvlPourcent();
        }
      );
  }

  /**
   * Fetch battlepass's data for a specific week of the current battlepass. todo: real data
   * @param weekNumber Optional - If not specified, fetches current week's data.
   */
  fetchBattlepassWeekData(weekNumber?: number): void {
    let fetchedWeekNumber = weekNumber
      ? weekNumber
      : this.bpMetadata.currentWeek;

    this.battlepassService.getBattlepassWeekData(fetchedWeekNumber).subscribe(
      (data: BattlepassWeekData) => {
        this.bpWeekData = data;
        this.updateBattlepassLvlPourcent();
        this.filterQuestsData();
      },
      (error) => {
        this.bpWeekData = battlepassWeekDataMock;
        this.updateBattlepassLvlPourcent();
        this.filterQuestsData();
      }
    );
  }

  /**
   * Separate quests metadata by status in different lists.
   */
  private filterQuestsMetadata(): void {
    this.bpDailyQuests = [];
    this.bpWeeklyQuests = [];
    this.bpMonthlyQuests = [];

    this.bpMetadata.questsMetadata.forEach((quest) => {
      quest.instances = [];
      switch (quest.type) {
        case 0:
          this.bpDailyQuests.push(quest);
          break;

        case 1:
          this.bpWeeklyQuests.push(quest);
          break;

        case 2:
          this.bpMonthlyQuests.push(quest);
          break;
      }
    });

    this.bpMonthlyQuests.sort((questA, questB) => {
      let questARemainingDays = questA.remainingDays
        ? questA.remainingDays
        : 30000;
      let questBRemainingDays = questB.remainingDays
        ? questB.remainingDays
        : 30000;
      return questARemainingDays - questBRemainingDays;
    });
  }

  /**
   * Links quests metadata with the quests realisation by type. todo: dailyquests
   */
  private filterQuestsData(): void {
    let questsList = this.bpWeekData.questsInstance;
    for (var i = 0, questStop = questsList.length; i < questStop; i++) {
      let quest = questsList[i];
      let found = false;

      for (var j = 0; j < this.bpDailyQuests.length; j++) {
        if (this.bpDailyQuests[j].id === quest.questMetadataId) {
          this.bpDailyQuests[j].instances.push(quest);
          found = true;
          break;
        }
      }

      if (found) continue;

      for (var j = 0; j < this.bpWeeklyQuests.length; j++) {
        if (this.bpWeeklyQuests[j].id === quest.questMetadataId) {
          this.bpWeeklyQuests[j].instances.push(quest);
          found = true;
          break;
        }
      }

      if (found) continue;

      for (var j = 0; j < this.bpMonthlyQuests.length; j++) {
        if (this.bpMonthlyQuests[j].id === quest.questMetadataId) {
          this.bpMonthlyQuests[j].instances.push(quest);
          found = true;
          break;
        }
      }
    }
  }

  private fetchBattlepassMetadata(): void {
    this.battlepassService.getBattlepassMetadata().subscribe(
      (data: BattlepassMetadata) => {
        this.bpMetadata = data;
        this.filterQuestsMetadata();
        this.initWeekList();
        this.fetchBattlepassWeekData();
      },
      (error) => {
        this.bpMetadata = battlepassMetadataMock;
        this.filterQuestsMetadata();
        this.initWeekList();
        this.fetchBattlepassWeekData();
      }
    );
  }

  private initWeekList(): void {
    this.bpWeekList = [];

    for (let i = 0; i < this.bpMetadata.nbOfWeeks; i++) {
      this.bpWeekList.push({
        weekNumber: i + 1,
        weekLabel: 'Semaine ' + (i + 1),
      });
    }
    this.bpCurrentSelectedWeek = this.bpMetadata.currentWeek;
  }

  private updateBattlepassLvlPourcent(): void {
    this.bpLvlPourcent = (this.bpWeekData.bpProgression.currentLvl * 100) / 50;
  }
}
