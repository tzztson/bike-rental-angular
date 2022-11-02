import isDate from 'lodash/isDate';
import isString from 'lodash/isString';

export class BaseModel {
  id: number;
  // createdAt and updatedAt are always part of every model
  createdAt: Date;
  updatedAt: Date;

  constructor(modelData: any = {}) {
    this.id = this.numberOrNull(modelData.id);
    this.createdAt = this.dateOrNull(modelData.createdAt);
    this.updatedAt = this.dateOrNull(modelData.updatedAt);
  }

  numberOrNull(number: any): number {
    if (number === null) {
      return number;
    }
    return Number(number);
  }

  stringOrNull(string: any): string {
    if (string === null) {
      return string;
    }
    if (isString(string)) {
      return string;
    }
    return null;
  }

  dateOrNull(date: any) {
    if (date === null) {
      return date;
    }
    if (isDate(date)) {
      return date;
    }
    return null;
  }

  csvToArray(arr: string): Array<string> {
    return arr && arr.substring(1, arr.length - 1).split(',');
  }

  arrayOrEmpty<T>(arr: Array<T>) {
    return Array.isArray(arr) ? arr : [];
  }

  convertNumberToBooleanAndBack(convertValue: number | boolean): number | boolean {
    if (typeof convertValue === 'boolean') {
      return +convertValue;
    }
    return !!convertValue;
  }
}
