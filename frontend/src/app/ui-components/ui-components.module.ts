import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { Ng5SliderModule } from 'ng5-slider';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslocoModule } from '@ngneat/transloco';
import { NgbDropdownModule, NgbPaginationModule, NgbRatingModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OverlayModule } from '@angular/cdk/overlay';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { UiChipsComponent } from './ui-chips/ui-chips.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import { UiSelectComponent } from './ui-select/ui-select.component';
import { UiRatingComponent } from './ui-rating/ui-rating.component';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiSliderComponent } from './ui-slider/ui-slider.component';
import { UiCheckboxComponent } from './ui-checkbox/ui-checkbox.component';
import { UiDatepickerComponent } from './ui-datepicker/ui-datepicker.component';
import { UiRadioButtonComponent } from './ui-radio-button/ui-radio-button.component';
import { UiSortDropdownComponent } from './ui-sort-dropdown/ui-sort-dropdown.component';
import { UiStepIndicatorComponent } from './ui-step-indicator/ui-step-indicator.component';
import { UiTextAreaComponent } from './ui-text-area/ui-text-area.component';
import { UiNavMenuComponent } from './ui-nav-menu/ui-nav-menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UiMenuButtonComponent } from './ui-menu-button/ui-menu-button.component';
import { UiTabsComponent } from './ui-tabs/ui-tabs.component';
import { UiTabComponent } from './ui-tabs/ui-tab/ui-tab.component';
import { UiPaginationComponent } from './ui-pagination/ui-pagination.component';
import { RouterModule } from '@angular/router';
import { UiSpinnerComponent } from './ui-spinner/ui-spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UiLanguageMenuComponent } from './ui-language-menu/ui-language-menu.component';
import { UiProfileCardComponent } from './ui-profile-card/ui-profile-card.component';
import { UiSelectedUsersComponent } from './ui-selected-users/ui-selected-users.component';
import { UiDateRangePickerComponent } from './ui-date-range-picker/ui-date-range-picker.component';

@NgModule({
  declarations: [
    UiButtonComponent,
    UiCheckboxComponent,
    UiInputComponent,
    UiStepIndicatorComponent,
    UiRadioButtonComponent,
    UiSliderComponent,
    UiSelectComponent,
    UiDatepickerComponent,
    UiChipsComponent,
    UiRatingComponent,
    UiTextAreaComponent,
    UiNavMenuComponent,
    UiSortDropdownComponent,
    UiTabsComponent,
    UiTabComponent,
    UiMenuButtonComponent,
    UiPaginationComponent,
    UiSpinnerComponent,
    UiLanguageMenuComponent,
    UiProfileCardComponent,
    UiSelectedUsersComponent,
    UiDateRangePickerComponent,
  ],
  imports: [
    FormsModule,
    NgxSpinnerModule,
    CommonModule,
    ReactiveFormsModule,
    TranslocoModule,
    Ng5SliderModule,
    NgbTooltipModule,
    NgSelectModule,
    MatDatepickerModule,
    MatMenuModule,
    MatButtonModule,
    NgbRatingModule,
    NgbDropdownModule,
    NgbPaginationModule,
    MatTabsModule,
    RouterModule,
    MatFormFieldModule,
    OverlayModule,
  ],
  exports: [
    UiButtonComponent,
    UiCheckboxComponent,
    UiInputComponent,
    UiStepIndicatorComponent,
    UiSelectComponent,
    UiSliderComponent,
    UiRadioButtonComponent,
    UiDatepickerComponent,
    UiChipsComponent,
    UiRatingComponent,
    UiSortDropdownComponent,
    UiTextAreaComponent,
    UiNavMenuComponent,
    UiPaginationComponent,
    UiTabsComponent,
    UiTabComponent,
    UiMenuButtonComponent,
    UiSpinnerComponent,
    UiLanguageMenuComponent,
    UiProfileCardComponent,
    UiSelectedUsersComponent,
    UiDateRangePickerComponent,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class UiComponentsModule {}
