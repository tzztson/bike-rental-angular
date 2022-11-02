import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiInputComponent } from './ui-input.component';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

describe('UiInputComponent', () => {
  let component: UiInputComponent;
  let fixture: ComponentFixture<UiInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiInputComponent],
      imports: [ReactiveFormsModule, FormsModule, TranslocoModule],
      providers: [ControlContainer],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
