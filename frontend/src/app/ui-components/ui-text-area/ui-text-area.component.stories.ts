import { storiesOf, moduleMetadata } from '@storybook/angular';
import { UiTextAreaComponent } from './ui-text-area.component';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { withKnobs, text, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { getComponentTemplate } from '../../../storybook-helpers/component.template';
import { HighlightJsModule } from 'ngx-highlight-js';
import { UiTextArea } from '../ui-components.enum';

const playgroundStoryTemplate = `
<form class="p-4" [formGroup]="testForm">
    <div class="col-md-4">
        <ui-text-area
                [color]="color"
                [placeholder]="placeholder"
                [rows]="rows"
                [maxLength]="maxlength"
                [errorMessages]="{ required: requiredMessage}"
                controlName="message"
            >
        </ui-text-area>
    </div>
</form>
`;

const playgroundStoryParams = `
@Input() controlName: string;
@Input() color: string;
@Input() rows: number;
@Input() maxlength: number;
@Input() placeholder: string;
@Input() errorMessages?: { [key: string]: string };
`;

class TestComponent {
  testForm = this.formBuilder.group({
    message: ['', [Validators.required]],
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

storiesOf('UiTextAreaComponent', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      declarations: [TestStoryComponent, UiTextAreaComponent],
      imports: [ReactiveFormsModule, HttpClientModule, TranslocoRootModule, HighlightJsModule],
      providers: [HttpClient, TranslocoService],
    }),
  )
  .add('Text Area', () => {
    return {
      component: TestStoryComponent,
      props: {
        color: UiTextArea.BackgroundBlue,
        rows: number('No of rows', 5),
        maxlength: number('Maximum no of caharacters', 15),
        placeholder: 'Message',
        requiredMessage: text('Required validation message', 'This field is required.'),
      },
    };
  });
