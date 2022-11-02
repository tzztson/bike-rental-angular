import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiNavMenuComponent } from './ui-nav-menu.component';

describe('UiNavMenuComponent', () => {
  let component: UiNavMenuComponent;
  let fixture: ComponentFixture<UiNavMenuComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UiNavMenuComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
