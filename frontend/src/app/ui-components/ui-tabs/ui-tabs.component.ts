import { MatTab, MatTabGroup } from '@angular/material/tabs';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
  ViewChild,
} from '@angular/core';

import { UiTabComponent } from './ui-tab/ui-tab.component';

@Component({
  selector: 'ui-tabs',
  templateUrl: './ui-tabs.component.html',
  styleUrls: ['./ui-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTabsComponent implements AfterViewInit {
  constructor() {}

  @ViewChild(MatTabGroup)
  public tabGroup: MatTabGroup;

  @ContentChildren(UiTabComponent)
  protected tabs: QueryList<UiTabComponent>;

  ngAfterViewInit() {
    this.replaceListOfTabs();
  }

  // this function allow to us to use custom tab component of mat-tabs. No need to write '<ng-template matTabContent>...<ng-template>',
  private replaceListOfTabs() {
    const matTabsFromQueryList = this.tabs.map((tab) => tab.matTab);
    const tabList = new QueryList<MatTab>();
    tabList.reset([matTabsFromQueryList]);
    this.tabGroup._tabs = tabList;
  }
}
