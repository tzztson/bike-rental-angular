import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelectComponent } from './ui-select.component';

describe('UiMultiselectComponent', () => {
  let component: UiSelectComponent;
  let fixture: ComponentFixture<UiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiSelectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
