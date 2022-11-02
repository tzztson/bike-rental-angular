import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'ui-sort-dropdown',
  templateUrl: './ui-sort-dropdown.component.html',
  styleUrls: ['./ui-sort-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiSortDropdownComponent implements OnChanges {
  // More info https://ng-bootstrap.github.io/#/components/dropdown/examples

  // Output of selected item in the dropdown
  @Output() selectedItem = new EventEmitter<number>();

  // input list of filters. Unfortunately i don't know interface of filter items, that's why the type of value is any
  @Input() sortItems: [
    {
      key: string | number;
      label: string;
    },
  ];

  // Object property to use for selected model
  @Input() bindValue: string | number;

  // Object property to use for label.
  @Input() bindLabel: string;

  // selected value to display in the layout
  @Input() selectedValue;

  constructor() {}

  ngOnChanges() {
    if (this.selectedValue) {
      this.selectedValue = this.sortItems.find(
        (sortItem: { key: string; label: string }) => sortItem.key === this.selectedValue,
      ).label;
      return;
    }
    this.selectedValue = this.sortItems[0][this.bindLabel];
  }

  choseItem(selectedItem: any) {
    this.selectedValue = selectedItem[this.bindLabel];
    this.selectedItem.emit(selectedItem[this.bindValue]);
  }
}
