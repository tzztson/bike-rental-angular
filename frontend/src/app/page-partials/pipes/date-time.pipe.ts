import { Pipe, PipeTransform } from '@angular/core';
import { merge, Observable, of } from 'rxjs';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { TranslocoService } from '@ngneat/transloco';

@Pipe({
  name: 'dateTime',
})
export class DateTimePipe implements PipeTransform {
  constructor(private readonly translateService: TranslocoService) {}

  transform(date: Date): Observable<string> {
    return merge(
      of(moment(date).locale('en').format('D MMM YYYY, HH:mm')),
      this.translateService.langChanges$.pipe(
        map((lang: string) => moment(date).locale(lang).format('D MMM YYYY, HH:mm')),
      ),
    );
  }
}
