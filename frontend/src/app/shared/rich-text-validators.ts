import { AbstractControl } from '@angular/forms';

// the underlying CKEditor embeds HTML tags into the control value for rich-text formatting
// built-in validators, such as Validators.minLength and maxLength, are therefore not adequate
export class RichTextValidators {
  public static minLength(minLength: number) {
    return (control: AbstractControl) => {
      if (RichTextValidators.stripTextFromHtml(control.value).length < minLength) {
        return { minlength: true };
      }

      return null;
    };
  }

  public static maxLength(minLength: number) {
    return (control: AbstractControl) => {
      if (RichTextValidators.stripTextFromHtml(control.value).length > minLength) {
        return { maxlength: true };
      }

      return null;
    };
  }
  // converts HTML markup argument into rendered text
  // example: for '<p><i>test</i></p>' argument, returned value is 'test'
  private static stripTextFromHtml(html: string): string {
    // the content is passed into an invisible div so it can be checked as presented to the user, without HTML tags.

    if (!html) {
      return '';
    }

    var temporaryDivElement = document.createElement('div');
    temporaryDivElement.innerHTML = html;

    // Retrieve the text property of the element (cross-browser support)
    return temporaryDivElement.textContent || temporaryDivElement.innerText || '';
  }
}
