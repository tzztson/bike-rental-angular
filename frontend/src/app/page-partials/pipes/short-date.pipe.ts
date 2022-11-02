import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { merge, Observable, of } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Pipe({
  name: 'shortDate',
})
export class ShortDatePipe implements PipeTransform {
  constructor(private readonly translateService: TranslocoService) {}

  transform(date: Date): Observable<string> {
    return merge(
      of(moment(date).locale('en').format('D MMM YYYY')),
      this.translateService.langChanges$.pipe(map((lang: string) => moment(date).locale(lang).format('D MMM YYYY'))),
    );
  }
}
