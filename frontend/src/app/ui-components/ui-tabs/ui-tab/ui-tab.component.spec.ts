import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiTabComponent } from './ui-tab.component';

describe('UiTabComponent', () => {
  let component: UiTabComponent;
  let fixture: ComponentFixture<UiTabComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UiTabComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
