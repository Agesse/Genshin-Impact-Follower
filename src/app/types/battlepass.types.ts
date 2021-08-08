export interface BattlepassMetadata {
  startDate: Date;
  endDate: Date;
  nbOfWeeks: number;
  currentWeek: number;
  questsMetadata: QuestMetadata[];
}

export interface BattlepassUpdateData {
  currentLvl: number;
  weekXP: number;
  previsionalLvl: number;
  previsionalWeekXP: number;
}

export interface BattlepassWeekData {
  bpProgression: BattlepassUpdateData;
  week: number;
  questsInstance: QuestInstance[];
}

export interface QuestMetadata {
  id: number;
  goal: string;
  reward: number;
  type: number;
  remainingDays?: number;
  instances?: QuestInstance[];
}

export interface QuestInstance {
  id: number;
  questMetadataId: number;
  status: number;
  weekDay?: string;
}
