import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-rxjs-combinelatest',
  templateUrl: './combinelatest.component.html'
})

export class CombineLatestComponent implements OnInit, OnDestroy {
  @ViewChild('btn1') btn1: ElementRef;
  @ViewChild('btn2') btn2: ElementRef;
  @ViewChild('btn3') btn3: ElementRef;

  cont1 = 0;
  cont2 = 0;
  cont3 = 0;
  subs: Subscription;

  constructor() { }

  ngOnInit() {
    this.cont1 = 0;
    this.cont2 = 0;
    this.cont3 = 0;

    const source1$ = Observable
      .fromEvent(this.btn1.nativeElement, 'click')
      .map(res => ++this.cont1)
      .startWith(0);

    const source2$ = Observable
      .fromEvent(this.btn2.nativeElement, 'click')
      .map(res => ++this.cont2)
      .startWith(0);

    const source3$ = Observable
      .fromEvent(this.btn3.nativeElement, 'click')
      .map(res => ++this.cont3)
      .startWith(0);

    this.subs = Observable.combineLatest(source1$, source2$, source3$)
      .subscribe(res => console.log(res));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
