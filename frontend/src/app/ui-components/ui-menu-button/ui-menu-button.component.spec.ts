import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiMenuButtonComponent } from './ui-menu-button.component';

describe('UiMenuButtonComponent', () => {
  let component: UiMenuButtonComponent;
  let fixture: ComponentFixture<UiMenuButtonComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UiMenuButtonComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UiMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
