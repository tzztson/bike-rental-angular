import { Pipe, PipeTransform } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import * as moment from 'moment';

@Pipe({
  name: 'dateLocale',
  pure: false,
})
export class DateLocalePipe implements PipeTransform {
  constructor(public translate: TranslocoService) {}

  transform(date: string, dateFormat: string): string {
    let lang = this.translate.getActiveLang();
    if (!this.translate.getActiveLang()) {
      lang = this.translate.getDefaultLang();
    }

    if (!date) {
      return '';
    }

    moment.locale(lang);
    const dateLocale = moment.utc(date).local();
    return dateLocale.format(dateFormat);
  }
}
