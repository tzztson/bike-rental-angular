import { Injectable } from '@angular/core';
import { FreelancerInfoModel } from '../../codinglab-api';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageHelper {
  getSelectedFreelancers(): { [id: string]: FreelancerInfoModel } {
    return JSON.parse(localStorage.getItem('selectedUsers'));
  }

  setSelectedFreelancers(freelancers: { [id: string]: FreelancerInfoModel }): void {
    localStorage.setItem('selectedUsers', JSON.stringify(freelancers));
  }
}
