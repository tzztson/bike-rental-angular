import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiProfileCardComponent } from './ui-profile-card.component';

describe('UiProfileCardComponent', () => {
  let component: UiProfileCardComponent;
  let fixture: ComponentFixture<UiProfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiProfileCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiProfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
