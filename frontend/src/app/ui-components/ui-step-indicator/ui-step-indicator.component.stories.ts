import { UiStepIndicatorComponent } from './ui-step-indicator.component';
import { withKnobs, number } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { getComponentTemplate } from '../../../storybook-helpers/component.template';
import { HighlightJsModule } from 'ngx-highlight-js';

const playgroundStoryTemplate = `
<div class="row-fluid pt-3 mb-4">
  <div class="col-md-9 col-lg-8 col-xl-7">
    <ui-step-indicator [totalSteps]="steps" [currentStep]="current"></ui-step-indicator>
  </div>
</div>`;
const playgroundStoryProps = `
@Input() totalSteps = 2;
@Input() currentStep = 1;`;

storiesOf('UiStepIndicatorComponent', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      declarations: [UiStepIndicatorComponent],
      imports: [HighlightJsModule],
    }),
  )
  .add('Playground', () => ({
    template: getComponentTemplate(playgroundStoryTemplate, playgroundStoryProps),
    props: {
      steps: number('Number of steps', 4, { min: 2, max: 6 }),
      current: number('Current step number', 2, { min: 1 }),
    },
  }));
