import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  DateRange,
  DefaultMatCalendarRangeStrategy,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
} from '@angular/material/datepicker';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ovn-ui-date-range-picker',
  templateUrl: './ui-date-range-picker.component.html',
  styleUrls: ['./ui-date-range-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiDateRangePickerComponent),
      multi: true,
    },
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: DefaultMatCalendarRangeStrategy,
    },
  ],
})
export class UiDateRangePickerComponent implements ControlValueAccessor {
  @Input() label = 'Date Range';
  @Input() placeHolder = 'Start date';
  @Input() minDate: Date = new Date(new Date().setDate(new Date().getDate()));
  @Input() maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 5));
  @Input() mode: 'only-range' | 'range-with-calendar' = 'range-with-calendar';
  @Input() value: DateRange<Date> = new DateRange<Date>(null, null);
  @Input() selectedDateRange: DateRange<Date>;
  @Input() currentDate: any;
  @Input() startDate: any;
  @Input() endDate: any;
  @Output() selectedDateRangeEmitter = new EventEmitter<DateRange<Date>>();

  isVisibleCalendar = false;

  // tslint:disable-next-line: no-unused identifier-blacklist
  private onChange = (value: any) => {};
  private onTouched = () => {};

  showCalendar(): void {
    this.selectedDateRange = new DateRange(this.startDate, this.endDate);
    this.isVisibleCalendar = !this.isVisibleCalendar;
  }

  onSelectedDateChange(date: Date): void {
    if (
      this.selectedDateRange &&
      this.selectedDateRange.start &&
      date > this.selectedDateRange.start &&
      !this.selectedDateRange.end
    ) {
      this.selectedDateRange = new DateRange(this.selectedDateRange.start, date);
    } else {
      this.selectedDateRange = new DateRange(date, null);
    }

    this.selectedDateRangeEmitter.emit(this.selectedDateRange);
    this.writeValue(this.selectedDateRange);
  }

  // These are being called because of ( NG_VALUE_ACCESSOR ) provides, it binds the the forms to those specific elements.
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // These are being called because of ( NG_VALUE_ACCESSOR ) provides, it binds the the forms to those specific elements.
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  // These are being called because of ( NG_VALUE_ACCESSOR ) provides, it binds the the forms to those specific elements.
  writeValue(outsideValue: DateRange<Date>): void {
    if (!outsideValue) {
      return;
    }
    this.value = outsideValue;
    this.onChange(outsideValue);
    this.onTouched();
  }
}
