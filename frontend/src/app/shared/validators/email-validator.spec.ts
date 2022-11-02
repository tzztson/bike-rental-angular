import { EmailValidator } from './email-validator';
import { FormControl } from '@angular/forms';

describe('Email Validation', () => {
  it('should be a valid email', () => {
    expect(EmailValidator.validate(new FormControl('test@codinglab.com'))).toBeNull();
    expect(EmailValidator.validate(new FormControl('test+100@codinglab.com'))).toBeNull();
    expect(EmailValidator.validate(new FormControl('test-100@codinglab.com'))).toBeNull();
    expect(EmailValidator.validate(new FormControl('test.100@codinglab.com'))).toBeNull();
    expect(EmailValidator.validate(new FormControl('test@codinglab.com.nl'))).toBeNull();
    expect(EmailValidator.validate(new FormControl('1@codinglab.com.nl'))).toBeNull();
    expect(EmailValidator.validate(new FormControl('1233test_123@codinglab.com.az'))).toBeNull();
  });

  it('should be an invalid email', () => {
    const errorMessage = { email: true };
    expect(EmailValidator.validate(new FormControl(null))).toEqual(errorMessage);
    expect(EmailValidator.validate(new FormControl(''))).toEqual(errorMessage);
    expect(EmailValidator.validate(new FormControl('codinglab'))).toEqual(errorMessage);
    expect(EmailValidator.validate(new FormControl('test@@codinglab.com'))).toEqual(errorMessage);
    expect(EmailValidator.validate(new FormControl('test@codinglab'))).toEqual(errorMessage);
    expect(EmailValidator.validate(new FormControl('test()*@codinglab'))).toEqual(errorMessage);
    expect(EmailValidator.validate(new FormControl('test@%*.com'))).toEqual(errorMessage);
    expect(EmailValidator.validate(new FormControl('test..2002@codinglab.com'))).toEqual(errorMessage);
    expect(EmailValidator.validate(new FormControl('@codinglab.com.az'))).toEqual(errorMessage);
  });
});
