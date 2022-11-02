import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'more-less-content',
  templateUrl: './more-less-content.component.html',
  styleUrls: ['./more-less-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreLessContentComponent implements AfterViewInit {
  displayButton = false;
  disclosedContent = false;

  private boxHeight: number;
  @ContentChild('content') private content: ElementRef;
  @ViewChild('wrapper') private wrapper: ElementRef;
  @Input() private displayLines = 2;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.calculateHeight();
  }

  toggle() {
    this.disclosedContent ? this.less() : this.more();
  }

  private calculateHeight() {
    // calculate the content height and the wrapper height
    const contentElm = this.content.nativeElement;
    const contentHeight = parseInt(window.getComputedStyle(contentElm, undefined).getPropertyValue('height'), 10);
    this.boxHeight = getLineHeight(contentElm) * this.displayLines;
    if (contentHeight > this.boxHeight) {
      this.enable();
      this.cdr.detectChanges();
    }
    this.wrapper.nativeElement.style.visibility = 'visible';
  }

  private enable() {
    this.displayButton = true;
    this.less();
  }

  private more() {
    event.preventDefault();
    this.disclosedContent = true;
    this.wrapper.nativeElement.style['-webkit-line-clamp'] = 'initial';
  }

  private less() {
    this.disclosedContent = false;
    this.wrapper.nativeElement.style['-webkit-line-clamp'] = this.displayLines;
  }
}

function getLineHeight(contentElement: HTMLElement): number {
  let lineHeight = parseInt(window.getComputedStyle(contentElement, undefined).getPropertyValue('lineHeight'), 10);
  if (isNaN(lineHeight)) {
    const clone = contentElement.cloneNode() as HTMLElement;
    clone.innerHTML = '<br>';
    contentElement.appendChild(clone);
    lineHeight = clone.clientHeight;
    contentElement.removeChild(clone);
  }
  return lineHeight;
}
