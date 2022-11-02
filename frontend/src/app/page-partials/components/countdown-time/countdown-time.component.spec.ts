import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountdownTimeComponent } from './countdown-time.component';

describe('CountdownTimeComponent', () => {
  let component: CountdownTimeComponent;
  let fixture: ComponentFixture<CountdownTimeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CountdownTimeComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
