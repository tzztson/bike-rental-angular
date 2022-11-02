import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-checkbox',
  templateUrl: './ui-checkbox.component.html',
  styleUrls: ['./ui-checkbox.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
})
export class UiCheckboxComponent implements OnInit {
  /**
   * Map of strings for  specific error validation errors. The strings can be translation keys.
   *
   */
  @Input() errorMessages?: { [key: string]: string };
  /**
   * A reference to a template variable which corresponds to the hidden
   * input tag of the checkbox. It's used to manually trigger its click event.
   *
   */
  @ViewChild('checkboxElement') checkboxElement: ElementRef;

  /**
   * The shape style of the checkbox
   *
   */
  @Input() shape: 'block' | 'inline-block' | 'inline' = 'block';

  /**
   * The reactive form control name
   *
   */
  @Input() controlName?: string;

  /**
   * The text of the label
   *
   */
  @Input() label;

  /**
   * The color style of the text
   *
   */
  @Input() colorText: 'dark' | 'black' = 'black';
  /**
   * The color style of the checkbox
   *
   */
  @Input() color: 'dark' | 'primary' = 'dark';

  /**
   * Emits any change in the checkbox state
   *
   */
  @Output() change = new EventEmitter<boolean>();

  /**
   * THe FormGroup object where the component is nested.
   *
   */
  parentForm: FormGroup;

  /**
   * A public getter for the reactive form control object
   *
   */
  get formControl() {
    return this.parentForm.get(this.controlName);
  }
  /**
   * An array containing all keys from the errorMessages map. It's used for ngFor iteration.
   *
   */
  errorMessageKeys: string[];

  constructor(private controlContainer: ControlContainer) {}

  ngOnInit() {
    this.parentForm = this.controlContainer.control as FormGroup;
    if (!this.parentForm || !this.controlName) {
      return;
    }

    if (this.errorMessages) {
      this.errorMessageKeys = Object.keys(this.errorMessages);
    }
  }

  /**
   * Handles the click event on the checkbox label and triggers the click event of the input element.
   * This workaround is needed because we are using a custom element for the box and the actual input element is hidden.
   *
   */
  onClick() {
    this.checkboxElement.nativeElement.click();
    this.change.emit(this.checkboxElement.nativeElement.checked);
  }
}
