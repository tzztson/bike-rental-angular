import { FormatDatePipe } from './format-date.pipe';

describe('HumanDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatDatePipe();
    expect(pipe).toBeTruthy();
  });
});
