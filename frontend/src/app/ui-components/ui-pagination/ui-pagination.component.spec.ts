import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiPaginationComponent } from './ui-pagination.component';

describe('PaginationComponent', () => {
  let component: UiPaginationComponent;
  let fixture: ComponentFixture<UiPaginationComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UiPaginationComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
