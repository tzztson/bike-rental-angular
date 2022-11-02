import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ui-language-menu',
  templateUrl: './ui-language-menu.component.html',
  styleUrls: ['./ui-language-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiLanguageMenuComponent implements OnChanges {
  @Input() languages: { key: any; label: string }[];
  @Input() language: string;

  /**
   * Horizontal Menu items position
   */
  @Input() xPosition: 'before' | 'after' = 'before';

  /**
   * Vertical Menu items position
   */
  @Input() yPosition: 'above' | 'below' = 'below';

  @Input() selectLanguage: string;

  @Output() selectedLanguage: EventEmitter<string> = new EventEmitter<string>();

  languageCodeToText = {
    en: 'english',
    nl: 'dutch',
  };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.selectLanguage) {
      this.selectLanguage = this.languages.find((language) => language.key === this.selectLanguage).label;
    }
  }

  onSelectedLanguage(selectedLanguage: { key: any; label: string }) {
    this.selectLanguage = selectedLanguage.label;
    this.selectedLanguage.emit(selectedLanguage.key);
  }
}
