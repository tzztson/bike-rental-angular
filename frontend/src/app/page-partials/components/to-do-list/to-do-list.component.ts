import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { UserModel } from '../../../codinglab-api';

@Component({
  selector: 'to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent {
  @Input() user: UserModel;

  @Output() isDisplayed = new EventEmitter<boolean>(true);

  constructor() {}

  toggleDisplay() {
    this.isDisplayed.emit(false);
  }
}
