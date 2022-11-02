# AdminPanel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

## Creating modules

to create a module use the command with dry run to test the command
`ng g m signup --routing --module app.module --dryRun`
And if you confirm that this is correct you can run it without --dryRun

## Module folder structure

The module folder structure will look like this:

```
module-name/

  components/
    some-component/
  pages/
    some-page/
      some-page.component.ts
      some-page.component.scss
      some-page.component.html
  module-name-routing.module.ts
  module-name.module.ts
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

to run unit tests run `npm run test`
to run a specific unit test run `npm run test src/app/forgot-password/pages/forgot-password/forgot-password.component.spec.ts`

## Writing end-to-end tests

Code style:
Input format input-\${name}

- Text format \${name}-text

- Button format \${name-of-button}-button

- Link format \${name-of-lin}-link

- Inputs elements \${name-of-input}-input

- etc.

Create all new commands in the separated created files in the: `e2e/support/` . After created custom commands, import file with custom commands in the `e2e/support/command.ts`
After created custom commands declare function in the: `e2e/support/index.d.ts`

### How will it look like

Place your specs inside integration folder. Specs are separated module wise. Within modules there are tests per page.
Which will look like

```
e2e/
  module-name/
    feature-name.device-name.spec.ts
```

### Why

The reason for this structure is that it allows us to keep the same structure as we have in the source code.
It would also keep the desktop and mobile versions close to eachother for the same feature.

### Example folder structure

```
e2e/
  integration/
    shared/
      page-partials/
        header/
          header.desktop.spec.ts
          header.mobile.spec.ts
        footer/
          footer.desktop.spec.ts
          footer.mobile.spec.ts
    client/
      jobs/
        jobs-create.desktop.spec.ts
        jobs-create.mobile.spec.ts
        jobs-overview.desktop.spec.ts
        jobs-overview.mobile.spec.ts
```

All examples of test placed in the `/e2e/examples`.
More info you can find in the https://docs.cypress.io/api/api/table-of-contents.html

## Running end-to-end tests

Run `npm run e2e`.
More info you can find in the https://docs.cypress.io/api/api/table-of-contents.html

## Running storybook (UI components explorer tool)

Run `npm run storybook` for a storybook server. After a successfull build, a browser tab will open and navigate to `http://localhost:9008`.

## Building the storybook

Run `npm run build-storybook` to build the storybook. The build artifacts will be stored in the `storybook-static/` directory.

## Using the knobs addon for storybook

Storybook Addon Knobs allow you to edit props dynamically using the Storybook UI.

```ts
// test.component.stories.ts

import { withKnobs, text, radios, number } from '@storybook/addon-knobs';

storiesOf('TestComponent', module)
  .addDecorator(withKnobs)
  .add('Playground', () => ({
    template: '<test testText="{{ testText }}" [testNumber]="testNumber" [testRadio]="testRadio"></test>',
    props: {
      testText: text('Test text', 'Default value of testText'),
      testNumber: number('Test number', /* default value */ 4, /* options */ { min: 2, max: 6 }),
      testRadio: size: radios('Test radio', {
        'Test radio 1': 'testRadio1',
        'Test radio 2': 'testRadio2',
        'Test radio 3': 'testRadio3'
      }, /* default value */ 'testRadio1')
    }
  }));
```

The knobs addon creates interactive controls so all three properties of the component can now be changed in real time. To see all knobs and learn how to use them, please refer to the [official documentation of Storybook Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)

## Adding Angular translate feature to your storybook

In order to use Angular translate in your storybook you need to import the TranslocoRootModule.

```ts
// test.component.stories.ts

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslocoRootModule } from 'src/app/transloco-root.module';


// We create a component for the story and set the default language in its constructor.
// We also export this class so it can be used in the MDX file later
@Component({
  template: '<your-component-html-template>',
})
export class TestComponent {
  constructor(translate: TranslocoService, private formBuilder: FormBuilder) {
    translate.setDefaultLang('en');
  }
}

// Use moduleMetadata decorator in your story definition to set the declarations, imports and providers
storiesOf('TestComponent', module)
  .addDecorator(
    moduleMetadata({
      declarations: [TestComponent],
      imports: [HttpClientModule, TranslocoRootModule],
      providers: [HttpClient, TranslateService],
    })
  )
  .add('Playground', () => {
    return {
      component: TestComponent,
      props: { ... }
    }
  });
```

```jsx
// test.component.stories.mdx

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslocoService } from '@ngneat/transloco';
import { TestModule } from '../test.module';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
// Use moduleMetadata decorator in your story definition to set the declarations, imports and providers
<Meta title='TestComponent'
  decorators={
    [
      moduleMetadata(
        {
          declarations: [TestComponent],
          imports: [HttpClientModule, TranslocoRootModule],
          providers: [HttpClient, TranslocoService]
        }
      )
    ]
  }
 />

<Story name='Docs' height='auto'>{{
  component: TestComponent,
  props: { ... },
}}
</Story>
```

Now you can use the translate pipe in your templates.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
