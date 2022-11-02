import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiSortDropdownComponent } from './ui-sort-dropdown.component';

describe('UiSortDropdownComponent', () => {
  let component: UiSortDropdownComponent;
  let fixture: ComponentFixture<UiSortDropdownComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UiSortDropdownComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSortDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
