import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fileDrop]',
})
export class FileDropDirective {
  @Output() fileDropped = new EventEmitter<File>();
  @Output() fileHoveredZone = new EventEmitter<boolean>();

  constructor() {}

  @HostListener('drop', ['$event'])
  onDrop($event: DragEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    const transfer = $event.dataTransfer.files[0];
    this.fileDropped.emit(transfer);
    this.fileHoveredZone.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.fileHoveredZone.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.fileHoveredZone.emit(false);
  }
}
