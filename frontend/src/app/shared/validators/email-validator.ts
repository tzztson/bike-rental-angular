import { AbstractControl } from '@angular/forms';

/**
 * This EmailValidator class uses Regex introduced by
 * https://github.com/manishsaraan/email-validator/blob/master/index.js
 * You are welcome to propose any stornger regex. Make sure it will pass all the unit tests
 */
export class EmailValidator {
  private static readonly EMAIL_REGEXP =
    /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  public static validate(control: AbstractControl): { [key: string]: boolean } | null {
    const email = control.value;
    return !EmailValidator.isValidEmail(email) ? { email: true } : null;
  }

  // in the future can update from npm package.
  private static isValidEmail(email: string): boolean {
    if (!email) {
      return true;
    }

    if (email.length > 256) {
      return false;
    }

    if (!EmailValidator.EMAIL_REGEXP.test(email)) {
      return false;
    }
    // Further checking of some things regex can't handle
    const [account, address] = email.split('@');

    if (account.length > 64) {
      return false;
    }

    const domainParts = address.split('.');
    return !domainParts.some((part) => {
      return part.length > 63;
    });
  }
}
