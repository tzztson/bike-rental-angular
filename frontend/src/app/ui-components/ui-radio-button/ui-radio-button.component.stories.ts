import { UiRadioButtonComponent } from './ui-radio-button.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, button } from '@storybook/addon-knobs';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HighlightJsModule } from 'ngx-highlight-js';
import { getComponentTemplate } from 'src/storybook-helpers/component.template';

const testForm = new FormGroup({
  testRadioButton: new FormControl('freelancer'),
});

const testRadioButton = testForm.get('testRadioButton');

const playgroundStoryTemplate = `
<form [formGroup]="testForm" class="p-3 mb-1 row">
    <ui-radio-button class="col-6 col-md-4 col-lg-3" controlName="testRadioButton" value="freelancer"
        text="Work as a freelancer" iconName="freelancer"></ui-radio-button>
    <ui-radio-button class="col-6 col-md-4 col-lg-3" controlName="testRadioButton" value="client"
        text="Post a project" iconName="client"></ui-radio-button>
</form>
<div class="px-3 mb-4">Selected value: {{ testRadioButton.value }}</div>
`;
const playgroundStoryProps = `
@Input() text: string;
@Input() iconName: 'freelancer' | 'client';
@Input() controlName: string;
@Input() value: string;
`;

@Component({
  template: playgroundStoryTemplate,
})
export class TestRadioButtonComponent {
  testForm = testForm;
  testRadioButton = testRadioButton;
  constructor() {}
}

storiesOf('UiRadioButtonComponent', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [UiRadioButtonComponent],
      imports: [FormsModule, ReactiveFormsModule, HighlightJsModule],
    }),
  )
  .add('Playground', () => {
    return {
      template: getComponentTemplate(playgroundStoryTemplate, playgroundStoryProps),
      props: {
        testForm,
        testRadioButton,
        setFreelancer: button('Set value to "freelancer"', () => {
          testRadioButton.setValue('freelancer');
        }),
        setClient: button('Set value to "client"', () => {
          testRadioButton.setValue('client');
        }),
      },
    };
  });
