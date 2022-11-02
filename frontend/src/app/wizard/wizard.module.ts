import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { TranslocoModule } from '@ngneat/transloco';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { WizardRoutingModule } from './wizard-routing.module';
import { PagePartialsModule } from '../page-partials/page-partials.module';
import { UiComponentsModule } from '../ui-components/ui-components.module';
import { WizardComponent } from './pages/wizard/wizard.component';
@NgModule({
  declarations: [WizardComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    WizardRoutingModule,
    PagePartialsModule,
    UiComponentsModule,
    CdkStepperModule,
    ReactiveFormsModule,
    TranslocoModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
  ],
})
export class WizardModule {}
