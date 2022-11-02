import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { merge, Observable, of } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  constructor(private readonly translateService: TranslocoService) {}

  transform(date: Date): Observable<string> {
    return merge(of(moment(date).locale('en').format('ddd, D MMM YYYY')), this.translateService.langChanges$).pipe(
      map((lang: string) => {
        return moment(date).locale(lang).format('ddd, D MMM YYYY');
      }),
    );
  }
}
