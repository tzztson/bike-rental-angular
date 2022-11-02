import { storiesOf, moduleMetadata } from '@storybook/angular';
import { UiInputComponent } from './ui-input.component';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

import { TranslocoService } from '@ngneat/transloco';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { getComponentTemplate } from '../../../storybook-helpers/component.template';
import { HighlightJsModule } from 'ngx-highlight-js';

const playgroundStoryTemplate = `
<form class="p-4" [formGroup]="testForm">
  <div class="col-md-4">
    <ui-input
      [type]="type"
      controlName="firstName"
      [errorMessages]="{ required: requiredMessage, minlength: minlengthMessage }"
      [label]="label"
    ></ui-input>
  </div>
</form>
`;

const playgroundStoryParams = `
@Input() controlName: string;
@Input() type: 'text' | 'email' | 'password' | 'number' = 'text';
@Input() label: string;
@Input() errorMessages?: { [key: string]: string };
`;

class TestComponent {
  testForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(translate: TranslocoService, private formBuilder: FormBuilder) {
    translate.setDefaultLang('en');
  }
}

@Component({
  template: getComponentTemplate(playgroundStoryTemplate, playgroundStoryParams),
})
class TestStoryComponent extends TestComponent {
  constructor(translate: TranslocoService, formBuilder: FormBuilder) {
    super(translate, formBuilder);
  }
}

@Component({
  template: playgroundStoryTemplate,
})
export class TestDocComponent extends TestComponent {
  constructor(translate: TranslocoService, formBuilder: FormBuilder) {
    super(translate, formBuilder);
  }
}

storiesOf('UiInputComponent', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      declarations: [TestStoryComponent, UiInputComponent],
      imports: [ReactiveFormsModule, HttpClientModule, TranslocoRootModule, HighlightJsModule],
      providers: [HttpClient, TranslocoService],
    }),
  )
  .add('Playground', () => {
    return {
      component: TestStoryComponent,
      props: {
        type: radios('Input type', { Text: 'text', Email: 'email', Password: 'password', Number: 'number' }, 'text'),
        label: text('Label', 'Test field'),
        requiredMessage: text('Required validation message', 'This field is required.'),
        minlengthMessage: text('Min. length (2) validation message', 'Please, enter at least 2 symbols.'),
      },
    };
  });
