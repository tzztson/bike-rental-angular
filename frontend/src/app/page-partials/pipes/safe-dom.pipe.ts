import DOMPurify from 'dompurify';
import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeValue } from '@angular/platform-browser';

@Pipe({
  name: 'safeDom',
})
export class SafeDomPipe implements PipeTransform {
  constructor(private readonly domSanitizer: DomSanitizer) {}

  transform(domData: {} | string | null, context: SecurityContext = SecurityContext.URL): SafeValue | null {
    return this.bypassSecurityTrust(context, DOMPurify.sanitize(domData));
  }

  private bypassSecurityTrust(context: SecurityContext, purifiedValue: string): SafeValue | null {
    switch (context) {
      case SecurityContext.HTML:
        return this.domSanitizer.bypassSecurityTrustHtml(purifiedValue);
      case SecurityContext.STYLE:
        return this.domSanitizer.bypassSecurityTrustStyle(purifiedValue);
      case SecurityContext.SCRIPT:
        return this.domSanitizer.bypassSecurityTrustScript(purifiedValue);
      case SecurityContext.URL:
        return this.domSanitizer.bypassSecurityTrustUrl(purifiedValue);
      case SecurityContext.RESOURCE_URL:
        return this.domSanitizer.bypassSecurityTrustResourceUrl(purifiedValue);
      default:
        return null;
    }
  }
}
