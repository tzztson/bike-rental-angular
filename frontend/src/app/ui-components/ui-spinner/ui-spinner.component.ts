import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-spinner',
  templateUrl: './ui-spinner.component.html',
  styleUrls: ['./ui-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSpinnerComponent {
  // More info https://www.npmjs.com/package/ngx-spinner#using-spinner-type

  // If false  -  in that case your parent element of spinner must have position: relative; style property.
  @Input() fullScreen = false;

  @Input() colorOfSpinner = '#1cd49c';
  @Input() colorOfText = '#fff';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() text = 'common.labels.loading';
  @Input() nameOfSpinner = 'primary';

  constructor() {}
}
