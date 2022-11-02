import { UiButtonComponent } from './ui-button.component';
import { storiesOf, moduleMetadata } from '@storybook/angular';
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { getComponentTemplate } from '../../../storybook-helpers/component.template';
import { HighlightJsModule } from 'ngx-highlight-js';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslocoService } from '@ngneat/transloco';

import { TranslocoRootModule } from 'src/app/transloco-root.module';

const playgroundStoryTemplate = `
<div class="p-3">
  <ui-button [color]="color" [shape]="shape" [size]="size" [iconName]="iconName">
  {{text}}
  </ui-button>
</div>
`;
const playgroundStoryParams = `
@Input() color = 'light';
@Input() shape: 'normal' | 'block' | 'link' = 'normal';
@Input() size: 'sm' | 'md' | 'lg' = 'md';
@Input() type: 'button' | 'submit' = 'button';
@Input() text: string;
@Input() iconName?: 'google' | 'linkedin';
`;

storiesOf('UiButtonComponent', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(
    moduleMetadata({
      declarations: [UiButtonComponent],
      imports: [HighlightJsModule, HttpClientModule, TranslocoRootModule],
      providers: [HttpClient, TranslocoService],
    }),
  )
  .add('Playground', () => ({
    template: getComponentTemplate(playgroundStoryTemplate, playgroundStoryParams),
    props: {
      color: radios(
        'Color',
        {
          'Light (Default)': 'light',
          Primary: 'primary',
          Danger: 'danger',
          'Special (white with dark border)': 'special',
        },
        'light',
      ),
      shape: radios('Shape', { 'Normal (Default)': 'normal', 'Block (full width)': 'block', Link: 'link' }, 'normal'),
      size: radios('Size', { Small: 'sm', 'Medium (default)': 'md', Large: 'lg' }, 'md'),
      text: text('Text', 'Test Button'),
      iconName: radios(
        'Icon (icons are located in assets/images/button-icons/)',
        { None: null, google: 'google', linkedin: 'linkedin' },
        null,
      ),
    },
  }));
