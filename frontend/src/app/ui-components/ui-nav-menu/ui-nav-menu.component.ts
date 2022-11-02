import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'ui-nav-menu',
  templateUrl: './ui-nav-menu.component.html',
  styleUrls: ['./ui-nav-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiNavMenuComponent implements OnChanges {
  /**
   * Menu name
   */
  @Input() menuName: string;

  /**
   * Horizontal Menu items position
   */
  @Input() xPosition: 'before' | 'after' = 'before';

  /**
   * Vertical Menu items position
   */
  @Input() yPosition: 'above' | 'below' = 'below';

  /**
   * Menu items to display
   */
  @Input() menuItems: { key: any; label: string; attrName: string; url?: string; action?: any }[];

  @Input() mode: 'single-select' | 'nav-list' = 'single-select';

  /*selected key from menu items*/
  @Output() private selectedKey = new EventEmitter<string | number>();

  /**
   * Image to be used instead of menuName
   */
  @Input() imgUrl: string;

  selectedItem: string;

  isOpenMenu = false;

  constructor() {}

  ngOnChanges() {
    if (!this.imgUrl) {
      this.imgUrl = 'assets/images/icons/profile-area.svg';
    }
  }

  onSelectItem(selectedItem: { key: any; label: string; attrName: string; url: string; action?: any }) {
    this.selectedItem = selectedItem.label;
    this.selectedKey.emit(selectedItem.key);
    if (selectedItem.action) {
      selectedItem.action.call();
    }
  }

  onOpenedMenu() {
    this.isOpenMenu = true;
  }

  onClosedMenu() {
    this.isOpenMenu = false;
  }
}
