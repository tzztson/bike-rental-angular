import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalContainerComponent {
  constructor() {}
}
