import { CdkStepper } from '@angular/cdk/stepper';
import { stepperAnimations } from '../../constants/stepper-animations';
import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: StepperComponent }],
  animations: [stepperAnimations.horizontalStepTransition],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent extends CdkStepper implements OnChanges {
  // Input the number of step
  @Input() nextStep: number;

  // Output selected step to the parent component
  @Output() selectedStep = new EventEmitter<number>();

  // Change step by input number of step
  ngOnChanges() {
    // this.selectedIndex - is selected/current step
    // We always have to subtract 1 from an incoming function, as UiStepIndicatorComponent tracks the step starting with 1,
    // while cdk stepper starts with 0.
    this.selectedIndex = --this.nextStep;
  }
}
