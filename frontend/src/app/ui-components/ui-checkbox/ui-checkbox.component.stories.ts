import { UiCheckboxComponent } from './ui-checkbox.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { text, withKnobs, radios } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { getComponentTemplate } from '../../../storybook-helpers/component.template';
import { HighlightJsModule } from 'ngx-highlight-js';
import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoRootModule } from 'src/app/transloco-root.module';

const testForm = new FormGroup({
  testCheckbox: new FormControl(false),
});
const testCheckbox = testForm.get('testCheckbox');

const playgroundStoryTemplate = `
<form [formGroup]="testForm" class="p-3 mb-1">
  <ui-checkbox controlName="testCheckbox" [label]="labelText" [color]="colorSelect"></ui-checkbox>
</form>
<div class="px-3 mb-4">Is checkbox checked: {{ testCheckbox.value }}</div>
`;
const playgroundStoryProps = `
@ViewChild('checkboxElement') checkboxElement: ElementRef;
@Input() controlName: string;
@Input() label = '';
@Input() color: 'dark' | 'primary' = 'dark';
@Output() change = new EventEmitter<boolean>();
`;

@Component({
  template: playgroundStoryTemplate,
})
export class TestCheckboxComponent {
  testForm = testForm;
  testCheckbox = testCheckbox;
  constructor() {}
}

storiesOf('UiCheckboxComponent', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      declarations: [UiCheckboxComponent],
      imports: [FormsModule, ReactiveFormsModule, HighlightJsModule, TranslocoRootModule, HttpClientModule],
      providers: [HttpClient, TranslocoService],
    }),
  )
  .add('Playground', () => {
    return {
      template: getComponentTemplate(playgroundStoryTemplate, playgroundStoryProps),
      props: {
        labelText: text('Checkbox label', 'Test label'),
        colorSelect: radios('Color selection', { Dark: 'dark', Primary: 'primary' }, 'dark'),
        testForm,
        testCheckbox,
      },
    };
  });
