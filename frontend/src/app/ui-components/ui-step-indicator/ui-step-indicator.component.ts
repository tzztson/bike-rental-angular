import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-step-indicator',
  templateUrl: './ui-step-indicator.component.html',
  styleUrls: ['./ui-step-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiStepIndicatorComponent implements OnInit, OnChanges {
  /**
   * Sets the total number of steps
   *
   */
  @Input() totalSteps = 2;

  /**
   * Sets the number of the currently active step
   *
   */
  @Input() currentStep = 1;

  /**
   * A readonly property which defines the minimum number of steps for the step indicator
   *
   */

  /**
   * Output clicked step to the parent component
   *
   */
  @Output() step = new EventEmitter<number>();

  private readonly minNumberOfSteps = 2;
  stepsRange: number[] = [];

  constructor() {}

  ngOnInit() {
    this.generateStepsRange();
  }

  changeStep(step: number) {
    event.preventDefault();
    this.step.emit(step);
  }

  ngOnChanges() {
    // generate new step range if the totalSteps input gets changed
    this.generateStepsRange();
  }

  /**
   * Validates the inputs and initializes the stepsRange property
   */
  private generateStepsRange() {
    if (this.totalSteps < this.minNumberOfSteps) {
      this.totalSteps = this.minNumberOfSteps;
    }

    if (this.currentStep > this.totalSteps) {
      this.currentStep = this.totalSteps;
    }

    if (this.stepsRange.length === this.totalSteps) {
      return;
    }

    // create an array with incremental numbers so it can be used to iterate
    // and print all the steps using *ngFor
    this.stepsRange = Array(this.totalSteps)
      .fill(1, 0)
      .map((_, i) => i + 1);
  }
}
