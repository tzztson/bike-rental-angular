import { Inject, Injectable } from '@angular/core';
import { WINDOW } from '../window.provider';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(@Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document) {}

  set<T>(key: string, dataValue: T): void {
    this.window.localStorage.setItem(key, JSON.stringify(dataValue));
  }

  get<T>(key: string): T {
    try {
      return JSON.parse(this.window.localStorage.getItem(key));
    } catch (e) {
      console.warn(e);
    }
  }

  remove(key: string): void {
    this.window.localStorage.removeItem(key);
  }
}
