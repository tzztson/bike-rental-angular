import { DateLocalePipe } from './date-locale.pipe';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoModule } from '@ngneat/transloco';
import { TestBed } from '@angular/core/testing';

describe('DateLocalePipe', () => {
  let translateService: TranslateService;
  let pipe: DateLocalePipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslocoModule],
      providers: [TranslateService],
    });

    translateService = TestBed.get(TranslateService);
    pipe = new DateLocalePipe(translateService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});
