import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'ui-text-area',
  templateUrl: './ui-text-area.component.html',
  styleUrls: ['./ui-text-area.component.scss'],
})
export class UiTextAreaComponent implements OnInit {
  /**
   * The reactive form control name
   *
   */
  @Input() controlName: string;

  /**
   * Placeholder value
   *
   */
  @Input() placeholder: string;

  /**
   * Map of strings for  specific error validation errors. The strings can be translation keys.
   *
   */
  @Input() errorMessages?: { [key: string]: string };

  /**
   * the maximum number of characters allowed in the text area
   */

  @Input() maxLength: number;
  /**
   * the minimum number of characters allowed in the text area
   */

  @Input() minLength: number;

  /**
   * the visible width of a text area
   */

  @Input() cols: number;

  /**
   *  the visible number of lines in a text area
   */

  @Input() rows: number;

  /**
   * An array containing all keys from the errorMessages map. It's used for ngFor iteration.
   *
   */
  errorMessageKeys: string[];

  /**
   * THe FormGroup object where the component is nested.
   *
   */
  parentForm: FormGroup;

  /**
   * Background color
   */
  @Input() color: 'blue' | 'white' = 'white';

  /**
   * A public getter for the reactive form control object
   *
   */
  get formControl() {
    return this.parentForm.get(this.controlName);
  }

  constructor(private controlContainer: ControlContainer) {}

  /**
   * Gets the parent form object and generates the errorMessageKeys array
   * from the errorMessages map.
   */
  ngOnInit() {
    this.parentForm = this.controlContainer.control as FormGroup;

    if (!this.parentForm || !this.controlName) {
      return;
    }

    if (this.errorMessages) {
      this.errorMessageKeys = Object.keys(this.errorMessages);
    }
  }
}
