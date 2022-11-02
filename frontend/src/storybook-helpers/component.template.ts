/**
 * This function extends a template for the storybok by adding the html itself as a code snippet
 and also can display properties documentation if provided
 *
 */
export const getComponentTemplate = (template: string, inputDocumentation: string = ''): string => {
  const regex = /{{|}}/gi;
  const cleanTemplate = template.replace(regex, '');
  const codeDisplay = `<h4>Code used for this example</h4>
  <div class="mt-3">
      <textarea highlight-js="true" [lang]="'html'">
          ${cleanTemplate}
      </textarea>
  </div>`;
  return `
    <div class="m-3">
        <div>
            ${template}
        </div>
        <h4>Parameters</h4>
        <div class="mt-3">
            <textarea highlight-js="true" [lang]="'javascript'">
                ${inputDocumentation || 'Description not available'}
            </textarea>
        </div>
        ${codeDisplay}
    </div>`;
};
