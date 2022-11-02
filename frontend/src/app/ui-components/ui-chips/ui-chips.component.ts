import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-chips',
  templateUrl: './ui-chips.component.html',
  styleUrls: ['./ui-chips.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiChipsComponent {
  // text of the chip
  @Input() text: string;

  // source to the img
  @Input() img: string;

  // shadow of chip
  @Input() chipShadow: 'none' | 'shadow' = 'shadow';

  constructor() {}
}
