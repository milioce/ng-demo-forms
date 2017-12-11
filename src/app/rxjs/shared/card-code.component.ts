import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rxjs-card-code',
  templateUrl: 'card-code.component.html'
})

export class CardCodeComponent implements OnInit {
  @Input() title: string;
  @Input() code: string;
  @Output() run = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onRun() {
    this.run.emit(true);
  }
}