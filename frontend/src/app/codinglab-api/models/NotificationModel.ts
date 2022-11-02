import { BaseModel } from './BaseModel';

export enum NotificationType {
  TimelogSent = 1,
  TimelogApproval = 2,
  NewApplication = 3,
  JobInterview = 4,
  JobHired = 5,
  ApplicationCompleted = 6,
}

export class NotificationModel extends BaseModel {
  id: number;
  userId: number;
  data: any;
  notificationId: NotificationType;
  isRead: boolean;
  isDeleted: boolean;
  constructor(notification: any = {}) {
    super(notification);
    this.id = this.numberOrNull(notification.id);
    this.userId = this.numberOrNull(notification.userId);
    this.data = notification.data;
    this.notificationId = <NotificationType>this.numberOrNull(notification.notificationId);
    this.isRead = notification.isRead;
    this.isDeleted = notification.isDeleted;
  }
}
