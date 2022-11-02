import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  open(
    message: string = 'Something went wrong',
    type: 'warning' | 'danger' | 'primary' | 'secondary' | 'info' | 'dark' | 'light' = 'primary',
    duration: number = 8000,
  ) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      // tslint:disable-next-line:identifier-blacklist
      data: message,
      duration: duration,
      panelClass: `snackBar-${type}`,
    });
  }
}
