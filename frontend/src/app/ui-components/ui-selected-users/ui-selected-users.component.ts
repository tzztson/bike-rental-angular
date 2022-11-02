import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { LocalStorageService } from '../../page-partials/services/local-storage/local-storage.service';
import { FreelancerInfoModel } from '../../codinglab-api';

@Component({
  selector: 'app-ui-selected-users',
  templateUrl: './ui-selected-users.component.html',
  styleUrls: ['./ui-selected-users.component.scss'],
})
export class UiSelectedUsersComponent implements OnChanges, OnInit {
  @Input() selectedUsers: FreelancerInfoModel[];

  constructor(private localStorage: LocalStorageService) {}

  ngOnInit() {
    this.setSelectedUsersFromLocalStorage();
  }

  ngOnChanges() {
    this.setSelectedUsersFromLocalStorage();
  }

  private setSelectedUsersFromLocalStorage(): void {
    this.selectedUsers = Object.values(this.localStorage.get('selectedUsers') || []);
  }
}
