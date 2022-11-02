import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent implements OnInit {
  @Input() icon: string;

  constructor() {}

  ngOnInit() {}
}
