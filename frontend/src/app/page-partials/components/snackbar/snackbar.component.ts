import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';
import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarComponent {
  constructor(private snackBar: MatSnackBar, @Inject(MAT_SNACK_BAR_DATA) public message: string) {}

  close() {
    this.snackBar.dismiss();
  }
}
