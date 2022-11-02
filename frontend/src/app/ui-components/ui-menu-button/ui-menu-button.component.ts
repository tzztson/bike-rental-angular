import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuPositionX, MenuPositionY } from '@angular/material/menu';

interface MenuList {
  label: string;
  action: Function;
}
@Component({
  selector: 'ui-menu-button',
  templateUrl: './ui-menu-button.component.html',
  styleUrls: ['./ui-menu-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiMenuButtonComponent {
  // more info https://material.angular.io/components/menu/overview

  @Input() color: 'primary' | 'light' | 'danger' | 'warn' = 'light';
  @Input() listMenu: MenuList[];
  @Input() xPosition: MenuPositionX = 'after';
  @Input() yPosition: MenuPositionY = 'below';

  doAction(menuItem: MenuList) {
    if (menuItem.action) {
      menuItem.action.call(this);
    }
  }
}
