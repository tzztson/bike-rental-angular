import { SubscriptionLike } from 'rxjs';
import { LabelType, Options } from 'ng5-slider';
import { TranslocoService } from '@ngneat/transloco';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper/stepper';
import { SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnDestroy } from '@angular/core';
import { UtilService } from '../../../shared/util.service';
import { InformationModel } from '../../../codinglab-api/models/InformationModel';
import { StepperComponent } from '../../../page-partials/components/stepper/stepper.component';

import { timeValues } from '../../../shared/constants/time-values';
import { monthDaysListInNumbers } from '../../../shared/constants/month-days-list-in-numbers';
import { yearsList } from '../../../shared/constants/yearsList';
import { countriesList } from '../../../shared/constants/countries-list';
import { monthsList } from '../../../shared/constants/months-list';

import { DateRange } from '@angular/material/datepicker';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent implements OnDestroy {
  // form groups
  firstStepFormGroup: FormGroup;
  secondStepFormGroup: FormGroup;
  timeValues = timeValues;
  monthsList = monthsList;
  yearsList = yearsList;
  countriesList = countriesList;
  monthDaysListInNumbers = monthDaysListInNumbers;

  currentStep = 1;
  totalSteps = 5;
  isLastStep: boolean;
  dropZoneActive = false;
  wrongFileExtension = false;
  allowedResumeDotExtensions = '';
  dropZoneMessageActive: string;
  dropZoneMessageWrongExtensions: string;
  editProfileForm: FormGroup;
  minDateOfStartDate = new Date();
  profileAvatar: SafeResourceUrl = 'assets/images/icons/profile-area.svg';
  hintMessage: string;
  locations: InformationModel[];
  roles: InformationModel[];
  technologies: InformationModel[];
  industries: InformationModel[];
  startDate: Date;
  endDate: Date;
  dateRange: DateRange<Date>;

  defaultValues = {
    minHourlyRate: 40,
    workingHours: [32, 40],
    remotePossible: true,
    officePossible: true,
  };
  hourlyRateOption: Options = {
    floor: 14,
    ceil: 100,
    showSelectionBar: true,
    ticksArray: [30, 60],
    ticksTooltip: (v: number): string => {
      if (v === 30) {
        return this.translateService.translate('hourly-rate-modal.labels.average-junior-rate');
      }
      if (v === 60) {
        return this.translateService.translate('hourly-rate-modal.labels.average-senior-rate');
      }
      return '';
    },
    translate: (rate: number, label: LabelType): string => {
      switch (label) {
        default:
          return this.translateService.translate('common.durations.hourly-rate.currency', { rate: rate });
      }
    },
  };
  workingHoursOptions: Options = {
    floor: 4,
    ceil: 40,
    translate: (workingHours: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return this.translateService.translate('profile.working-hours-options.min-selected-hour', {
            minHour: workingHours,
          });
        case LabelType.High:
          return this.translateService.translate('profile.working-hours-options.max-selected-hour', {
            maxHour: workingHours,
          });
        default:
          return '';
      }
    },
  };
  errors = {
    firstName: {
      required: 'First name is required.',
    },
    lastName: {
      required: 'Last name is required.',
    },
    email: {
      required: 'Email address is required.',
      email: 'Email is not correct',
    },
    phoneNumber: {
      required: 'Phone number is required.',
    },
    country: {
      required: 'Country is required.',
    },
    streetAddress: {
      required: 'Street address is required.',
    },
    city: {
      required: 'City is required.',
    },
    state: {
      required: 'State is required.',
    },
    postalCode: {
      required: 'postalCode is required.',
    },
    yearOfBirth: {
      required: 'Year date of birth is required.',
    },
    aptSuite: {},
    dayOfBirth: {
      required: 'Day date of birth is required.',
    },
    monthOfBirth: {
      required: 'Month date of birth is required.',
    },
    pickupDate: {
      required: 'Pickup date is required.',
    },
    dropoffDate: {
      required: 'Dropoff date is required.',
    },
    pickupTime: {
      required: 'Pickup time is required.',
    },
    dropoffTime: {
      required: 'Dropoff time is required.',
    },
  };

  startImmediatelyColorButton: 'primary' | 'light' = 'primary';
  startDateColorButton: 'primary' | 'light' = 'light';

  private subscription: SubscriptionLike[] = [];
  uploadingResume = false;

  constructor(private utilService: UtilService, private translateService: TranslocoService) {
    this.createWizardForms();
  }

  private createWizardForms() {
    this.firstStepFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      streetAddress: new FormControl('', [Validators.required]),
      aptSuite: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', [Validators.required]),
      yearOfBirth: new FormControl('', [Validators.required]),
      monthOfBirth: new FormControl('', [Validators.required]),
      dayOfBirth: new FormControl('', [Validators.required]),
    });

    this.secondStepFormGroup = new FormGroup({
      pickupDate: new FormControl('', [Validators.required]),
      pickupTime: new FormControl('', [Validators.required]),
      dropoffDate: new FormControl('', [Validators.required]),
      dropoffTime: new FormControl('', [Validators.required]),
    });
  }

  nextStep(stepper: StepperComponent, stepNumberFromStepIndicator?: number) {
    if (stepNumberFromStepIndicator) {
      stepper.selectedIndex = stepNumberFromStepIndicator - 1;
      return;
    }
    stepper.selected.stepControl.markAllAsTouched();
    stepper.next();
    this.isLastStep = stepper.selectedIndex === stepper.steps.length - 1;
  }

  previousStep(stepper: StepperComponent) {
    stepper.previous();
  }

  changeCurrentStep(step: StepperSelectionEvent) {
    this.currentStep = ++step.selectedIndex;
    this.isLastStep = step.selectedIndex === this.totalSteps;
  }

  ngOnDestroy() {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
    this.subscription = [];
  }

  updateDateRange(date: DateRange<Date>) {
    this.startDate = date.start;
    this.endDate = date.end;
  }
}
