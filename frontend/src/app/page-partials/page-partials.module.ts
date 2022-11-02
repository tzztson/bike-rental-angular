import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { NgxSpinnerModule } from 'ngx-spinner';
import { TranslocoModule } from '@ngneat/transloco';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';

import { SafeDomPipe } from './pipes/safe-dom.pipe';
import { FileDropDirective } from './directives/file-drop.directive';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { AuthTemplateComponent } from './components/auth-template/auth-template.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { ModalContainerComponent } from './components/modal-container/modal-container.component';
import { RichTextEditorComponent } from './components/rich-text-editor/rich-text-editor.component';
import { RichTextViewerComponent } from './components/rich-text-viewer/rich-text-viewer.component';
import { MoreLessContentComponent } from './components/more-less-content/more-less-content.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { MatExpansionModule } from '@angular/material/expansion';
import { ShortDatePipe } from './pipes/short-date.pipe';
import { CountdownTimeComponent } from './components/countdown-time/countdown-time.component';
import { DateTimePipe } from './pipes/date-time.pipe';
import { WithJWTPipe } from './pipes/with-jwt.pipe';

@NgModule({
  declarations: [
    EmptyStateComponent,
    NavbarComponent,
    RichTextEditorComponent,
    RichTextViewerComponent,
    SidebarComponent,
    SpinnerComponent,
    StepperComponent,
    AuthTemplateComponent,
    ModalContainerComponent,
    ToDoListComponent,
    FileDropDirective,
    SuccessModalComponent,
    SnackbarComponent,
    MoreLessContentComponent,
    SafeDomPipe,
    RelativeTimePipe,
    FormatDatePipe,
    ShortDatePipe,
    CountdownTimeComponent,
    DateTimePipe,
    WithJWTPipe,
  ],
  imports: [
    CommonModule,
    MatSnackBarModule,
    CdkStepperModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgxSpinnerModule,
    TranslocoModule,
    RouterModule,
    UiComponentsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatBadgeModule,
    MatExpansionModule,
  ],
  exports: [
    EmptyStateComponent,
    NavbarComponent,
    RichTextEditorComponent,
    RichTextViewerComponent,
    SidebarComponent,
    FileDropDirective,
    SpinnerComponent,
    StepperComponent,
    AuthTemplateComponent,
    ToDoListComponent,
    ModalContainerComponent,
    MoreLessContentComponent,
    SafeDomPipe,
    RelativeTimePipe,
    FormatDatePipe,
    ShortDatePipe,
    CountdownTimeComponent,
    DateTimePipe,
    WithJWTPipe,
  ],
})
export class PagePartialsModule {}
