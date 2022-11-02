import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SubscriptionLike, timer } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import * as moment from 'moment';

import { LocalStorageService } from '../../services/local-storage/local-storage.service';

export const keyOfResendExpiryDate = 'resendExpiryDate';

@Component({
  selector: 'countdown-time',
  templateUrl: './countdown-time.component.html',
  styleUrls: ['./countdown-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownTimeComponent implements OnInit, OnDestroy, OnChanges {
  @Input() private countDown: number;
  @Input() text = 'signup-success-page.labels.resend-verification-code';
  @Output() private timeIsOver: EventEmitter<boolean> = new EventEmitter<boolean>();
  timeEnd = true;
  time: number;

  private defaultCountDown: number;
  private subscription: SubscriptionLike;

  constructor(private localStorage: LocalStorageService) {}

  ngOnChanges(changes: SimpleChanges) {
    this.defaultCountDown = changes.countDown.currentValue;
  }

  ngOnInit() {
    this.differentDates();
  }

  startTime() {
    const previousDate = moment(this.localStorage.get(keyOfResendExpiryDate));
    const differentBetweenDates = moment().diff(previousDate, 'seconds');
    if (!previousDate.isValid() || differentBetweenDates >= this.defaultCountDown) {
      this.localStorage.set(keyOfResendExpiryDate, moment());
    }
    this.subscription = timer(0, 1000)
      .pipe(
        takeWhile((time: number) => {
          const isLastSecond: boolean = time !== this.countDown;
          if (!isLastSecond) {
            this.time = 0;
            this.timeIsOver.emit(true);
            this.timeEnd = true;
            this.countDown = this.defaultCountDown;
            this.localStorage.remove(keyOfResendExpiryDate);
            return isLastSecond;
          }
          return isLastSecond;
        }),
        map((time: number) => {
          this.time = this.countDown - time;
          this.timeIsOver.emit(false);
          this.timeEnd = false;
        }),
      )
      .subscribe();
  }

  private differentDates() {
    const previousDate = moment(this.localStorage.get(keyOfResendExpiryDate));
    const differentBetweenDates = moment().diff(previousDate, 'seconds');
    if (previousDate.isValid() && differentBetweenDates <= this.countDown) {
      this.countDown = this.countDown - differentBetweenDates;
      this.timeIsOver.emit(false);
      this.startTime();
      return;
    }
    this.timeIsOver.emit(true);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
