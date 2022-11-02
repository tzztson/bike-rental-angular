import * as moment from 'moment';
import { merge, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Pipe({
  name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
  constructor(private readonly translateService: TranslocoService) {}
  transform(date: Date): Observable<string> {
    return merge(of(moment(date).locale('en').fromNow()), this.translateService.langChanges$).pipe(
      map((lang: string) => {
        return moment(date).locale(lang).fromNow();
      }),
    );
  }
}
