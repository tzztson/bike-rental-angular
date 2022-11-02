import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiStepIndicatorComponent } from './ui-step-indicator.component';

describe('UiStepIndicatorComponent', () => {
  let component: UiStepIndicatorComponent;
  let fixture: ComponentFixture<UiStepIndicatorComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UiStepIndicatorComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UiStepIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
