import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, APP_INITIALIZER, Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { CdkTableModule } from '@angular/cdk/table';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { Ng5SliderModule } from 'ng5-slider';

export function tokenGetter() {
  return localStorage.getItem('feathers-jwt');
}

import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomDateAdapter } from './shared/CustomDateAdapter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { appRoutes } from './app.routes';
import { ReversePipe } from './shared/pipes/reverse.pipe';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ngfModule } from 'angular-file';

import { HttpClientModule } from '@angular/common/http';
import { SortJobsResponsesPipe } from './shared/pipes/sort-jobs-responses.pipe';
import { MessagesService, ApiService } from './codinglab-api';
import { DateLocalePipe } from './shared/pipes/date-locale.pipe';

import { UiComponentsModule } from './ui-components/ui-components.module';
import { PagePartialsModule } from './page-partials/page-partials.module';
import { AppConfigService } from './codinglab-api/app-config.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { TranslocoRootModule } from './transloco-root.module';

export function initConfig(appConfig: AppConfigService) {
  return () => appConfig.loadConfig();
}

const MY_DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
  NgSelectModule,
};

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    pinch: { enable: true },
  };
}

@NgModule({
  declarations: [AppComponent, ReversePipe, SortJobsResponsesPipe, DateLocalePipe],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    // plugins
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000'],
        disallowedRoutes: ['localhost:3000/auth/'],
      },
    }),
    NgSelectModule,
    MatDatepickerModule,
    MatMenuModule,
    MatButtonModule,
    MatNativeDateModule,
    NgbModule,
    NgxSpinnerModule,
    Ng5SliderModule,
    NgxTrimDirectiveModule,
    ngfModule,
    UiComponentsModule,
    PagePartialsModule,
    TranslocoRootModule,
    CdkTableModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { backdropClass: 'modal-backDrop', hasBackdrop: true, closeOnNavigation: true },
    },
    { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfigService], multi: true },
    ApiService,
    { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    MessagesService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  exports: [CdkTableModule],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
