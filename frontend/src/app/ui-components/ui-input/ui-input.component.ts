import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ControlContainer } from '@angular/forms';

@Component({
  selector: 'ui-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss'],
})
export class UiInputComponent implements OnInit {
  // background color of input and labels
  @Input() backgroundColor: 'white' | 'default' = 'white';

  /**
   * The reactive form control name
   *
   */
  @Input() controlName: string;

  /**
   * The type attribute of the input tag
   *
   */
  @Input() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'search' = 'text';

  /**
   * The text of the label
   *
   */
  @Input() label: string;

  /**
   * Map of strings for  specific error validation errors. The strings can be translation keys.
   *
   */
  @Input() errorMessages?: { [key: string]: string };

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
