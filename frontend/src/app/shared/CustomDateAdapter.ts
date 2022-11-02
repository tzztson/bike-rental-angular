import { NativeDateAdapter } from '@angular/material/core';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat !== 'input') {
      return date.toDateString();
    }

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day} -${month} -${year}`;
  }
}
