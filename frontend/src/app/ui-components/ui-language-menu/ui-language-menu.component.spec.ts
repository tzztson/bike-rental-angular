import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UiLanguageMenuComponent } from './ui-language-menu.component';

describe('UiLanguageMenuComponent', () => {
  let component: UiLanguageMenuComponent;
  let fixture: ComponentFixture<UiLanguageMenuComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [UiLanguageMenuComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLanguageMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
