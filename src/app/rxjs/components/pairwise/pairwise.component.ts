import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pairwise';


@Component({
  selector: 'app-rxjs-pairwise',
  templateUrl: './pairwise.component.html'
})

export class PairwiseComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  onTest() {
    Observable.fromEvent(document, 'click')
      .map((event: MouseEvent) => event.target)
      .pairwise()
      .subscribe(res => console.log('pairwise', res));
  }

  get code() {
    return ``;
  }
}
