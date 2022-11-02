import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../../../codinglab-api/api.service';
import { UserModel } from '../../../codinglab-api/models/UserModel';
import { TimeReportService } from '../../../codinglab-api/model-services/time-reports.service';
import { environment } from 'src/environments/environment';
import { InvitationsService } from '../../../codinglab-api/model-services/invitations.service';
import { ContractsService } from '../../../codinglab-api/model-services/contracts.service';
import { ContractStatus } from '../../../codinglab-api/models/ContractModel';
import { ReportStatus, BillingStatus } from '../../../codinglab-api/models/TimeReportModel';
import { Query } from '@feathersjs/feathers';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  user = new UserModel();
  user$: Subscription;
  showBillPending = false;
  showTimeReportPending = false;
  reportStatus = ReportStatus;
  billingStatus = BillingStatus;
  ContractStatus = ContractStatus;
  showBilling = false;
  showMessages = false;
  showTimeManagement = false;
  constructor(
    private apiService: ApiService,
    private timeReportService: TimeReportService,
    private invitationsService: InvitationsService,
    private contractsService: ContractsService,
  ) {}

  ngOnInit() {
    this.user$ = this.apiService.getCurrentUser().subscribe(async (user: UserModel) => {
      this.user = user;

      this.showBilling = await this.hasUserBilling();
      this.showBillPending = await this.hasBillPending();
      this.showTimeManagement = await this.hasFreelancerContract();
      this.showTimeReportPending = await this.hasTimeReportPending();

      if (!this.user.isAdmin()) {
        this.showMessages = await this.hasUserInvited();
      }
    });
  }

  async hasUserBilling() {
    const report = await this.timeReportService.find({
      query: {
        freelancerId: this.user.id,
        status: this.reportStatus.Approved,
        $limit: 0, // to get count only
      },
    });
    return report.total > 0;
  }

  async hasBillPending() {
    const report = await this.timeReportService.find({
      query: {
        freelancerId: this.user.id,
        billingStatus: this.billingStatus.Pending,
        status: this.reportStatus.Approved,
        $limit: 0, // to get count only
      },
    });
    return report.total > 0;
  }

  async hasUserInvited() {
    const query: Query = {
      query: {
        $limit: 0, // to get count only
      },
    };
    if (this.user.isClient()) {
      query.query.clientId = this.user.id;
    } else if (this.user.isFreelancer()) {
      query.query.freelancerId = this.user.id;
    }
    const invitation = await this.invitationsService.find(query);
    return invitation.total > 0;
  }

  async hasTimeReportPending() {
    const report = await this.timeReportService.find({
      query: {
        clientId: this.user.id,
        status: this.reportStatus.Sent,
        $limit: 0, // to get count only
      },
    });
    return report.total > 0;
  }

  async hasFreelancerContract() {
    const contract = await this.contractsService.find({
      query: {
        freelancerId: this.user.id,
        status: ContractStatus.InProgress,
        $limit: 0, // to get count only
      },
    });
    return contract.total > 0;
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }

  openJobsPage() {
    const win = window.open(`${environment.frontendUrl}/jobs`, '_blank');
    win.focus();
  }
}
