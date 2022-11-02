import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiRadioButtonComponent } from './ui-radio-button.component';

describe('UiRadioButtonComponent', () => {
  let component: UiRadioButtonComponent;
  let fixture: ComponentFixture<UiRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiRadioButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
