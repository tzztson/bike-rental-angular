import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';
import { Router } from '@angular/router';

import {
  UserModel,
  Roles,
  NotificationModel,
  UsersService,
  ApiService,
  NotificationService,
  NotificationType,
  JobStatus,
  JobsService,
} from '../../../codinglab-api';
import { Sort } from '../../../shared/constants';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  user: any = new UserModel();
  user$: Subscription;
  Roles = Roles;

  showLanguages = false;
  showProfile = false;
  showSteps = true;
  notifications: NotificationModel[];
  unReadNotification: any;
  showNotification = false;
  JobStatus = JobStatus;
  NotificationType = NotificationType;
  isDisplayList: boolean;

  // key in the local storage to display To Do list
  private keyOfDisplayList = 'displayToDoList';

  constructor(
    private apiService: ApiService,
    private router: Router,
    public translateService: TranslocoService,
    private userService: UsersService,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService,
    private jobsService: JobsService,
  ) {}

  ngOnInit() {
    this.isDisplayList =
      this.localStorageService.get(this.keyOfDisplayList) !== null
        ? this.localStorageService.get(this.keyOfDisplayList)
        : true;
    this.user$ = this.apiService.getCurrentUser().subscribe(async (user: UserModel) => {
      this.user = user;
      this.getNotification(this.user.id);
      if (this.user.isFreelancer()) {
        if (!this.user.isNew && this.user.hasApplied && !this.user.hasStepsDone) {
          this.showSteps = false;
        }
        // tslint:disable-next-line:no-collapsible-if
      } else {
        if (!this.user.hasStepsDone) {
          await this.jobsService
            .find({
              query: {
                userId: this.user.id,
                status: this.JobStatus.Published,
                $limit: 1,
                $select: ['id'],
              },
            })
            .then((jobs) => {
              if (jobs.length > 0) {
                this.showSteps = false;
              } else {
                this.showSteps = true;
              }
            });
        }
      }
    });
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }

  getLanguage() {
    return this.translateService.getActiveLang();
  }

  setLanguage(lang: string) {
    this.translateService.setActiveLang(lang);
  }

  async showAllNotification() {
    if (this.user.isFreelancer()) {
      await this.router.navigate(['/freelancer/notifications']);
    } else if (this.user.isClient()) {
      await this.router.navigate(['/client/notifications']);
    }
  }

  showNotifications() {
    if (this.showNotification) {
      const updateNotification: Partial<NotificationModel> = {
        isRead: true,
      };
      this.notifications.forEach(async (notification: NotificationModel) => {
        await this.notificationService.patch(notification.id, updateNotification);
      });
    }
    this.showNotification = !this.showNotification;
    this.getNotification(this.user.id);
  }

  getNotification(userId: number) {
    this.notificationService
      .find({
        query: {
          userId: userId,
          $sort: {
            createdAt: Sort.Descending,
          },
          isDeleted: false,
          $limit: 5,
        },
      })
      .then((res) => {
        this.notifications = res.data;
        this.unReadNotification = this.notifications.filter((notification: any) => {
          return !notification.isRead;
        });
      })
      .catch(() => {});
  }

  async deleteNotification($event: any, id: number) {
    $event.stopPropagation();
    const notification: Partial<NotificationModel> = {
      isDeleted: true,
    };
    await this.notificationService.patch(id, notification);
    this.getNotification(this.user.id);
  }

  finishStep() {
    const user: Partial<UserModel> = {
      hasStepsDone: true,
    };
    this.userService
      .patch(this.user.id, user)
      .then((updatedUser) => {
        this.user = updatedUser;
      })
      .catch(() => {});
  }

  isDisplayToDoList(event: boolean) {
    this.isDisplayList = event;
    // set value of display to do list in the pages to the local storage
    this.localStorageService.set(this.keyOfDisplayList, event);
  }

  async logout(event: any) {
    event.preventDefault();
    await this.apiService.logout();
  }
}
