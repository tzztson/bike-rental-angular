import { Pipe, PipeTransform } from '@angular/core';
import { isObservable, Observable, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { ApiService } from 'src/app/codinglab-api';
@Pipe({
  name: 'withJWT',
})
export class WithJWTPipe implements PipeTransform {
  constructor(private apiService: ApiService) {}

  transform(url$: Observable<string> | string): Observable<string> | Promise<string> {
    if (isObservable(url$)) {
      return url$.pipe(
        filter((url) => !!url),
        switchMap((url) => this.apiService.getAccessToken().then((token) => `${url}?accessToken=${token}`)),
      );
    }

    if (typeof url$ === 'string') {
      return this.apiService.getAccessToken().then((token) => `${url$}?accessToken=${token}`);
    }

    return of(url$);
  }
}
