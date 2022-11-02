import '@ckeditor/ckeditor5-build-classic/build/translations/nl';
import { Component, OnInit, Input, SkipSelf } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ControlContainer, FormGroup } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'rich-text-editor',
  templateUrl: './rich-text-editor.component.html',
  styleUrls: ['./rich-text-editor.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]],
    },
  ],
})
export class RichTextEditorComponent implements OnInit {
  /**
   * The reactive form control name
   *
   */
  @Input() controlName: string;

  // placeholder of ckeditor
  @Input() private placeholder: string;

  /**
   * Map of strings for  specific error validation errors. The strings can be translation keys.
   *
   */
  @Input() errorMessages?: { [key: string]: string };
  errorMessageKeys: string[];

  /**
   * THe FormGroup object where the component is nested.
   *
   */
  parentForm: FormGroup;
  /**
   * A public getter for the reactive form control object
   *
   */
  get formControl() {
    return this.parentForm.get(this.controlName);
  }

  /**
   * THe FormGroup object where the component is nested.
   *
   */

  Editor = ClassicEditor;

  editorConfiguration = {
    toolbar: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'blockQuote',
      'insertTable',
      'undo',
      'redo',
    ],
    placeholder: null,
    language: 'en',
  };
  constructor(private controlContainer: ControlContainer, private translateService: TranslocoService) {}

  ngOnInit() {
    this.parentForm = this.controlContainer.control as FormGroup;
    this.editorConfiguration.placeholder = this.translateService.translate(this.placeholder);
    if (!this.parentForm || !this.controlName) {
      return;
    }
    if (this.errorMessages) {
      this.errorMessageKeys = Object.keys(this.errorMessages);
    }
  }
}
