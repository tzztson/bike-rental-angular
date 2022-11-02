import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rich-text-viewer',
  templateUrl: './rich-text-viewer.component.html',
  styleUrls: ['./rich-text-viewer.component.scss'],
})
export class RichTextViewerComponent implements OnInit {
  @Input()
  text: string;

  constructor() {}

  ngOnInit() {}
}
