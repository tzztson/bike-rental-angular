import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: '',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  constructor(public translateService: TranslocoService) {}

  ngOnInit() {}
}
