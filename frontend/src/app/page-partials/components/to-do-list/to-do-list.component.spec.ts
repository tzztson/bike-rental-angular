import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToDoListComponent } from './to-do-list.component';
import { TranslocoModule } from '@ngneat/transloco';
import { UiComponentsModule } from '../../../ui-components/ui-components.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('ToDoListComponent', () => {
  let component: ToDoListComponent;
  let fixture: ComponentFixture<ToDoListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ToDoListComponent],
        imports: [TranslocoModule, UiComponentsModule, RouterTestingModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
