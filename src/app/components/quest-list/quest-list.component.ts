import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css'],
})
export class QuestListComponent implements OnInit {
  @Input() periodName: string;

  @Input() remainingQuests = 0;

  constructor() {}

  ngOnInit(): void {}
}
