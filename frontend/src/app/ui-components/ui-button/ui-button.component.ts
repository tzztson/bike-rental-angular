import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiButtonComponent {
  @HostBinding('class')
  private get hostClass(): string {
    return this.isDisabled ? 'disabled' : 'enabled';
  }

  /**
   * The color class of the button
   *
   */
  @Input() color: 'primary' | 'light' = 'light';
  /**
   * The shape style of the button
   *
   */
  @Input() shape: 'normal' | 'block' | 'link' | 'inline' = 'normal';
  /**
   * The size css class of the button
   *
   */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  /**
   * The text color css class
   *
   */

  @Input() textColor: 'dark' | 'primary' | 'danger' | 'grey' | 'secondary';
  /**
   * The type attribute of the button tag
   * Firefox have some problem with submit button cause html also have attribute type.
   * so the variable name should not be 'type' to avoid conflicts
   *
   */
  @Input() buttonType: 'button' | 'submit' = 'button';

  /**
   * Font weight in the button
   *
   */
  @Input() textWeight: 'bold' | 'regular' = 'bold';

  /**
   * The name of the icon is a key from the iconFilesMap property.
   *
   */
  @Input() iconName?: 'google' | 'linkedin' | 'back' | 'next';

  /**
   * A map containing all icon file names from the button icons folder.
   *
   */
  // to disable button property
  @Input() isDisabled = false;

  iconFilesMap: { [key: string]: string } = {
    google: 'logo-google.svg',
    linkedin: 'logo-linkedin.svg',
  };

  constructor() {}
}
