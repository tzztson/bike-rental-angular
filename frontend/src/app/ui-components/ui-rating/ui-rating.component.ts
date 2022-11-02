import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'ui-rating',
  templateUrl: './ui-rating.component.html',
  styleUrls: ['./ui-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiRatingComponent implements OnInit {
  // The maximal rating that can be given.
  @Input() maxStar = 5;

  // The current rating
  @Input() selectedRate = 0;

  // If true, the rating can't be changed
  @Input() readonly = false;

  // color of stars
  @Input() color: 'primary' | 'dark' = 'primary';

  /**
   * The reactive form control name
   *
   */
  @Input() controlName?: string;

  /**
   * Map of strings for  specific error validation errors. The strings can be translation keys.
   *
   */
  @Input() errorMessages: { [key: string]: string };

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

  ngOnInit() {
    if (this.controlName) {
      this.parentForm = this.controlContainer.control as FormGroup;
    }
    if (!this.parentForm || !this.controlName) {
      return;
    }
  }
}
