import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCheckboxComponent } from './ui-checkbox.component';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';

describe('UiCheckboxComponent', () => {
  let component: UiCheckboxComponent;
  let fixture: ComponentFixture<UiCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiCheckboxComponent],
      imports: [ReactiveFormsModule, CommonModule, FormsModule, TranslocoModule],
      providers: [ControlContainer],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
