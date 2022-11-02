import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'ui-pagination',
  templateUrl: './ui-pagination.component.html',
  styleUrls: ['./ui-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPaginationComponent implements OnChanges {
  // more info https://ng-bootstrap.github.io/#/components/pagination/overview

  // current page
  @Input() page: number;

  // The number of items per page.
  @Input() itemsPerPage = 10;

  // The number of items in your paginated collection
  @Input() amountOfItems: number;

  // display items per page
  @Output() changeItemsPerPage: EventEmitter<number> = new EventEmitter<number>();

  // The maximum number of pages to display.
  @Input() displayNumberOfPages = 5;

  @Output() private changePage: EventEmitter<number> = new EventEmitter<number>();

  selectedDisplayItemsPerPage: number;
  itemsDisplay = [
    {
      page: 5,
    },
    {
      page: 10,
    },
    {
      page: 50,
    },
  ];

  lastPage: number;

  constructor() {}

  ngOnChanges() {
    // calculate last page
    this.lastPage = Math.ceil(this.amountOfItems / this.itemsPerPage);
  }

  goToLastPage() {
    this.page = this.lastPage;
    this.changePage.emit(this.page);
  }

  goToFirstPage() {
    this.page = 1;
    this.changePage.emit(this.page);
  }

  changedPage(page: number) {
    this.changePage.emit(page);
  }

  displayItems(selectedDisplayItems: number) {
    this.selectedDisplayItemsPerPage = selectedDisplayItems['page'];
    this.changeItemsPerPage.emit(selectedDisplayItems['page']);
  }
}
