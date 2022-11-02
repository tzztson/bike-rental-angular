import { Observable, SubscriptionLike } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { DateAdapter } from '@angular/material/core';
import * as moment from 'moment';
import { map, pluck } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'ui-datepicker',
  templateUrl: './ui-datepicker.component.html',
  styleUrls: ['./ui-datepicker.component.scss'],
})
export class UiDatepickerComponent implements OnInit, OnDestroy {
  // Mor info about date picker https://material.angular.io/components/datepicker/overview

  // display calendar icon inside the button
  @Input() showIcon = true;

  // set text of the button
  @Input() text: string;

  /**
   * The color class of the button
   *
   */
  @Input() color: 'light' | 'primary' = 'primary';
  /**
   * The shape style of the button
   *
   */
  @Input() shape: 'normal' | 'block' | 'link' = 'normal';

  /**
   * The reactive form control name
   *
   */
  @Input() controlName: string;

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

  // locale not formatted picked date. Used when changing lang
  private pickedDate;

  // value to display formatted picked date
  formattedPickedDate = '';

  // size of button
  @Input() size: 'xs' | 'md' = 'xs';

  // The minimum valid date.
  @Input() minDate: Date;

  // The maximum valid date.
  @Input() maxDate: Date;

  /**
   * A public getter for the reactive form control object
   *
   */
  get formControl() {
    return this.parentForm.get(this.controlName);
  }

  private subscription: SubscriptionLike[] = [];
  isMobileResolutions$: Observable<boolean>;

  constructor(
    private controlContainer: ControlContainer,
    private translateService: TranslocoService,
    private dateAdapter: DateAdapter<Date>,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit() {
    this.initialize();
    this.mobileView();
    this.onChangeLang();
  }

  private initialize() {
    this.parentForm = this.controlContainer.control as FormGroup;

    if (!this.parentForm || !this.controlName) {
      return;
    }

    if (this.errorMessages) {
      this.errorMessageKeys = Object.keys(this.errorMessages);
    }

    if (this.parentForm.get(this.controlName).value) {
      this.formattedPickedDate = moment(this.parentForm.get(this.controlName).value)
        .locale(this.translateService.getActiveLang())
        .format('ddd, D MMM YYYY');
    }

    this.subscription.push(
      this.parentForm
        .get(this.controlName)
        .valueChanges.pipe(
          map((date) => {
            if (date) {
              this.formattedPickedDate = moment(date)
                .locale(this.translateService.getActiveLang())
                .format('ddd, D MMM YYYY');
              return;
            }
            this.formattedPickedDate = '';
          }),
        )
        .subscribe(),
    );
  }

  onChangeLang() {
    this.subscription.push(
      this.translateService.langChanges$.subscribe((lang: string) => {
        this.dateAdapter.setLocale(lang);
        this.formattedPickedDate = moment(this.pickedDate).locale(lang).format('ddd, D MMM YYYY');
      }),
    );
  }

  private mobileView() {
    this.isMobileResolutions$ = this.breakpointObserver.observe([Breakpoints.Handset]).pipe(
      pluck('matches'),
      map((state: boolean) => state),
    );
  }

  ngOnDestroy() {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
    this.subscription = [];
  }
}
