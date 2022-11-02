import { MatTab } from '@angular/material/tabs';
import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'ui-tab',
  templateUrl: './ui-tab.component.html',
  styleUrls: ['./ui-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTabComponent {
  // more info https://material.angular.io/components/tabs/overview

  // name of tab label
  @Input() label: string;

  @ViewChild(MatTab) matTab: MatTab;
}
