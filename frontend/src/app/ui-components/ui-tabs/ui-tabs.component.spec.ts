import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiTabsComponent } from './ui-tabs.component';

describe('UiTabsComponent', () => {
  let component: UiTabsComponent;
  let fixture: ComponentFixture<UiTabsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UiTabsComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
