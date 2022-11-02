import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelectedUsersComponent } from './ui-selected-users.component';

describe('UiSelectedUsersComponent', () => {
  let component: UiSelectedUsersComponent;
  let fixture: ComponentFixture<UiSelectedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSelectedUsersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSelectedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
