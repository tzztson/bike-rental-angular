import { Component, OnInit, Input, OnDestroy, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroup, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ui-radio-button',
  templateUrl: './ui-radio-button.component.html',
  styleUrls: ['./ui-radio-button.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
})
export class UiRadioButtonComponent implements OnInit, OnDestroy {
  /**
   * Text content of the button
   *
   */
  @Input() text: string;

  /**
   * The name of the icon
   *
   */
  @Input() iconName: 'freelancer' | 'client' | 'candidate' | 'frontend' | 'backend' | 'design';

  /**
   * The reactive form control name
   *
   */
  @Input() controlName: string;

  /**
   * The reactive form control value
   *
   */
  @Input() value: string | boolean | number;

  /**
   * The form control of the reactive form group
   *
   */
  formControl: AbstractControl;

  /**
   * Indicates if the radio button is the active one from the group
   *
   */
  isActive = false;

  /**
   * Holds the value valueChanges subscription of the form control
   * so it can be unsubscribed during the OnDestroy hook
   *
   */
  valueChangesSubscription: Subscription;

  constructor(private controlContainer: ControlContainer) {}

  /**
   * Gets the parent form group object, initializes the parentForm property
   * and sets the isActive property.
   *
   */
  ngOnInit() {
    this.initializeFormControl();
  }

  /**
   * Calls the unsubscribe method of valueChangesSubscription so the subscription
   * won't be active after the life span of the component.
   *
   */
  ngOnDestroy() {
    this.valueChangesSubscription.unsubscribe();
  }

  /**
   * Gets the form control object, sets initial active state and subscribes to value changes
   *
   */
  initializeFormControl() {
    const parentForm = this.controlContainer.control as FormGroup;
    this.formControl = parentForm.get(this.controlName);
    this.isActive = this.value === this.formControl.value;
    this.valueChangesSubscription = this.formControl.valueChanges.subscribe(
      (newValue) => (this.isActive = newValue === this.value),
    );
  }

  /**
   * Sets the value of the radio form control to the value of this button.
   * The method is called by the click event handler.
   *
   */
  onClick() {
    this.formControl.setValue(this.value);
  }
}
