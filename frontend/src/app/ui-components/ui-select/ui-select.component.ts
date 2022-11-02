import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'ui-select',
  templateUrl: './ui-select.component.html',
  styleUrls: ['./ui-select.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiSelectComponent implements OnInit, OnChanges {
  // More specific input and output you can find https://github.com/ng-select/ng-select

  // Arrays of items
  @Input() items: any[];

  // Can search value in select array
  @Input() canSearch = false;

  // What key should be select
  @Input() bindValue: string | number;

  // What value should display
  @Input() bindLabel: string;

  @Input() groupBy = '';

  @Input() selectableGroup = false;

  @Input() searchFunction: Function;

  // placeholder translation key
  @Input() placeHolder: string;

  // placeholder translated to selected language
  placeholderValue: string;

  // property of img what should displayed in each value of select component
  @Input() imgSrcProperty: string;

  // Multi select value or single
  @Input() multiSelect = false;

  // Close select area when selected value
  @Input() closeAfterSelect = true;

  // Allow to clear selected value
  @Input() canClear = true;

  // change background color of selected element and option element
  @Input() backGroundColor: 'blue' | 'light' = 'light';

  /**
   * The reactive form control name
   *
   */
  @Input() controlName: string;

  // Fired on model change. Outputs whole model
  @Output() changeSelect: EventEmitter<any> = new EventEmitter();

  /**
   * THe FormGroup object where the component is nested.
   *
   */
  parentForm: FormGroup;

  /**
   * An array containing all keys from the errorMessages map. It's used for ngFor iteration.
   *
   */
  @Input() errorMessages?: { [key: string]: string };
  errorMessageKeys: string[];

  /**
   * A public getter for the reactive form control object
   *
   */
  get formControl() {
    return this.parentForm.get(this.controlName);
  }

  constructor(private controlContainer: ControlContainer, private translateService: TranslocoService) {}

  listenToLangChange() {
    this.translateService.langChanges$.subscribe(() => {
      this.refresh();
    });
  }
  ngOnChanges() {
    this.listenToLangChange();
    if (this.placeHolder) {
      this.placeholderValue = this.translateService.translate(this.placeHolder);
    }
  }

  private refresh() {
    this.placeholderValue = this.translateService.translate(this.placeHolder);
  }

  ngOnInit() {
    this.parentForm = this.controlContainer.control as FormGroup;
    if (!this.parentForm || !this.controlName) {
      return;
    }

    if (this.errorMessages) {
      this.errorMessageKeys = Object.keys(this.errorMessages);
    }
  }

  onChangeSelect(event: any) {
    if (event) {
      this.changeSelect.emit(event);
      return;
    }
  }
}
