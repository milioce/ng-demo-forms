import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-rxjs-switchmap',
  templateUrl: 'switchmap.component.html'
})

export class SwitchMapComponent implements OnInit, OnDestroy {
  cont = 0;
  subs: Subscription;
  constructor() { }

  ngOnInit() {
    const source$ = Observable.fromEvent(document, 'click');

    this.subs = source$.switchMap(ev => {
      this.cont++;
      return Observable.interval(500).map(v => this.cont + ':' + v);
    }).subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onTest() {
  }

  get code() {
    return ``;
  }
}