import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessModalComponent {
  constructor(
    private readonly router: Router,
    private readonly location: Location,
    public readonly dialogRef: MatDialogRef<SuccessModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dataFromParentComponent: {
      header: string;
      description: string;
      button: {
        text: string;
        link: string;
        leftButtonText: string;
        leftButtonCallback: Function;
        aboveButton: string;
        underButton: string;
      };
    },
  ) {}

  async goToLink() {
    if (this.dataFromParentComponent.button.link) {
      await this.router.navigateByUrl(this.dataFromParentComponent.button.link);
    }
    this.dialogRef.close(true);
  }

  leftButtonCallback() {
    if (this.dataFromParentComponent.button.leftButtonCallback) {
      this.dataFromParentComponent.button.leftButtonCallback();
    }

    this.dialogRef.close(true);
  }
}
