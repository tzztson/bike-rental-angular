import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { TimeLogModel } from 'src/app/codinglab-api/models/TimeLogModel';
import { JobModel } from 'src/app/codinglab-api/models/JobModel';
import { JobResponseModel } from '../codinglab-api';
import { InformationService } from 'src/app/codinglab-api/model-services/information.service';
import { HttpParams } from '@angular/common/http';
import { ApiService } from '../codinglab-api';
import { InformationModel } from '../codinglab-api/models/InformationModel';
import { SnackbarService } from '../page-partials/services/snackbar/snackbar.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  months = {
    1: 'january',
    2: 'february',
    3: 'march',
    4: 'april',
    5: 'may',
    6: 'june',
    7: 'july',
    8: 'august',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december',
  };
  technologiesAndRoles: InformationModel[] = [];

  profileImgUrl$ = new BehaviorSubject<string | null>(null);

  constructor(
    private translateService: TranslocoService,
    private snackbarService: SnackbarService,
    private informationService: InformationService,
    private apiService: ApiService,
  ) {
    // commented, cause when this service is defined, all the time happens request
    // to server, what is the meaning of this earlier I do not know
    // this.informationService
    //   .getRolesAndTechnologies()
    //   .then((technologiesAndRoles) => {
    //     this.technologiesAndRoles = technologiesAndRoles;
    //   })
    //   .catch((err) => {
    //     this.snackbarService.open(err, 'danger');
    //   });
  }

  setProfileImgUrl(profileImgUrl: string) {
    this.profileImgUrl$.next(profileImgUrl);
  }

  getWorkingHoursInNumbers(workingHours: string) {
    if (!workingHours) {
      return;
    }
    const [hour, minute] = workingHours.split(':');
    return (Number(hour) + Number(minute) * 0.016667).toFixed(2); /* one minute to hour (1 min = 0.016667 hr) */
  }

  getWorkingHoursInString(minute: number) {
    return this.getHoursInString(Math.floor(minute / 60), minute % 60);
  }

  getHoursInString(hour: number, min: number) {
    return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
  }

  getFullMonth(month: number) {
    return this.translateService.translate(`common.months.${this.months[month]}`);
  }

  getHourlyRateDesc(hourlyRate: string) {
    if (hourlyRate === '' || hourlyRate === null) {
      return '-';
    }

    let newVal: string = String(hourlyRate);

    if (newVal.substr(-2) === '.5') {
      newVal = `${hourlyRate}0`;
    } else {
      newVal = `${hourlyRate},-`;
    }

    return `€ ${newVal}`;
  }

  getDateDiff(date: Date) {
    const dt1 = new Date(date);
    const dt2 = new Date();
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24),
    );
  }

  calculateAmountAndHours(timeLogResponse: TimeLogModel[]) {
    let totalMin = 0;
    let totalAmount = 0;
    timeLogResponse.forEach((timelog) => {
      const [hour, minute] = timelog.hoursWorked.split(':');
      const min = Number(hour) * 60 + Number(minute);
      const scale = timelog.hourlyRate / 60;
      timelog['amount'] = this.formatAmount((scale * min).toFixed(2));
      totalAmount += Number((scale * min).toFixed(2));
      totalMin += min;
    });

    return {
      totalAmount: this.formatAmount(totalAmount.toString()),
      totalHours: this.getWorkingHoursInString(totalMin),
    };
  }

  levenstein(string: string, string2: string) {
    const a = string;
    const b = string2;
    const m = [];
    const min = Math.min;

    if (!(a && b)) {
      return (b || a).length;
    }

    for (let i = 0; i <= b.length; m[i] = [i++]) {}
    for (let j = 0; j <= a.length; m[0][j] = j++) {}

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        m[i][j] =
          b.charAt(i - 1) === a.charAt(j - 1)
            ? m[i - 1][j - 1]
            : (m[i][j] = min(m[i - 1][j - 1] + 1, min(m[i][j - 1] + 1, m[i - 1][j])));
      }
    }

    return m[b.length][a.length];
  }

  getDisplayTechsOrRoles(informationIds: number[]): string {
    if (!informationIds) {
      return '';
    }

    const techList = informationIds.map(
      (technologiesAndRole) => this.technologiesAndRoles.find((tech) => tech.id === technologiesAndRole).name,
    );
    // Should return something like this: JavaScript, React.js, Git, Angular
    return techList.join(', ');
  }

  formatAmount(amount: string) {
    // to check decimal fraction is zero or not
    if (Number(amount) % 1 === 0) {
      return amount;
    }
    if (this.translateService.getActiveLang() !== 'nl') {
      return amount;
    }
    return Number(amount).toFixed(2).replace('.', ',');
  }

  getFile(rawFile: File): Promise<any> {
    if (!rawFile) {
      return;
    }
    return this.getBase64(rawFile);
  }

  getBase64(rawFile: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(rawFile);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  validateFile(lastInvalids: any[]) {
    if (!lastInvalids || !lastInvalids.length) {
      return;
    }
    const invalid = lastInvalids.pop();
    switch (invalid.type) {
      case 'fileSize':
        this.snackbarService.open(this.translateService.translate('common.messages.file-too-big'), 'warning');
        break;
      case 'accept':
        this.snackbarService.open(this.translateService.translate('common.messages.file-not-accepted'), 'warning');
        break;
    }
  }

  getJobWorkingHours(job: JobModel): string {
    // should return something like this: 32-40u
    if (job.minWorkingHours === job.maxWorkingHours) {
      return `${job.minWorkingHours}${this.translateService.translate('common.labels.hours-abbreviation')}`;
    }

    return `${job.minWorkingHours} - ${job.maxWorkingHours}${this.translateService.translate(
      'common.labels.hours-abbreviation',
    )}`;
  }

  getAvailability(jobResponse: JobResponseModel): string {
    const min = Number(jobResponse.user.freelancerInfo.minWorkingHours);
    const max = Number(jobResponse.user.freelancerInfo.maxWorkingHours);
    if (min === max) {
      return max.toString();
    }
    return `${min} - ${max}`;
  }

  async downloadFile(url: string, id: number, httpParams?: HttpParams) {
    httpParams = (httpParams ? httpParams : new HttpParams()).append(
      'accessToken',
      await this.apiService.getAccessToken(),
    );
    window.open(`${url}/${id}?${httpParams.toString()}`, '_blank');
  }
}
