import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiButtonComponent } from './ui-button.component';
import { TranslocoModule } from '@ngneat/transloco';

describe('UiButtonComponent', () => {
  let component: UiButtonComponent;
  let fixture: ComponentFixture<UiButtonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UiButtonComponent],
        imports: [TranslocoModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
