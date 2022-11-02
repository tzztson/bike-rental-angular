import { Options } from 'ng5-slider';
import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'ui-slider',
  templateUrl: './ui-slider.component.html',
  styleUrls: ['./ui-slider.component.scss'],
})
export class UiSliderComponent implements OnInit {
  // More options https://angular-slider.github.io/ng5-slider/docs

  // options of slider like for label etc
  @Input() optionsSlider: Options;

  // set color of slider line, default is white color
  @Input() greyLine = false;

  /**
   * The reactive form control name
   *
   */
  @Input() controlName: string;
  /**
   * Map of strings for  specific error validation errors. The strings can be translation keys.
   *
   */
  @Input() errorMessages?: { [key: string]: string };

  @Input() disabled = false;

  /**
   * An array containing all keys from the errorMessages map. It's used for ngFor iteration.
   *
   */
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

  manualRefresh: EventEmitter<void> = new EventEmitter<void>();

  constructor(private controlContainer: ControlContainer, private translateService: TranslocoService) {}

  private refresh() {
    // fixes resize issues
    this.manualRefresh.emit();
    setTimeout(() => {
      this.manualRefresh.emit();
    }, 200);
  }

  listenToLangChange() {
    this.translateService.langChanges$.subscribe(() => {
      this.refresh();
    });
  }

  ngOnInit() {
    this.refresh();
    this.listenToLangChange();
    this.parentForm = this.controlContainer.control as FormGroup;
    if (!this.parentForm || !this.controlName) {
      return;
    }

    if (this.errorMessages) {
      this.errorMessageKeys = Object.keys(this.errorMessages);
    }
  }
}
