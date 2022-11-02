import { Component, Input } from '@angular/core';
import { FreelancerInfoModel } from '../../codinglab-api';

@Component({
  selector: 'ui-profile-card',
  templateUrl: './ui-profile-card.component.html',
  styleUrls: ['./ui-profile-card.component.scss'],
})
export class UiProfileCardComponent {
  @Input() freelancer: FreelancerInfoModel;
}
