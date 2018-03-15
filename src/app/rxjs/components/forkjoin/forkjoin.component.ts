import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-rxjs-forkjoin',
  templateUrl: './forkjoin.component.html'
})

export class ForkjoinComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  test1() {
    const one$ = Observable.interval(1000)
      .do(res => console.log('one', res))
      .take(5);
    const two$ = Observable.interval(1000)
      .do(res => console.log('two', res))
      .take(3);

    Observable.forkJoin(one$, two$).subscribe(
      res => console.log('forkJoin', res),
      (err) => console.log('forkJoin error'),
      () => console.log('forkJoin completed')
    );
  }

  test2() {
    const detalle1$ = Observable.of({ id: 1, name: 'Emilio' });
    const detalle2$ = Observable.of({ organisation: 'Everis', enabled: true });
    const result = (obj1, obj2) => Object.assign({}, obj1, obj2);

    Observable
      .forkJoin(detalle1$, detalle2$, result)
      .subscribe(res => console.log('forkJoin res', res));
  }

  onTest1() {
    console.clear();
    this.test2();
  }


  get code() {
    return `
const detalle1$ = Observable.of({ id: 1, name: 'Emilio' });
const detalle2$ = Observable.of({ organisation: 'Everis', enabled: true });
const result = (obj1, obj2) => Object.assign({}, obj1, obj2);

Observable
  .<strong>forkJoin</strong>(detalle1$, detalle2$, result)
  .subscribe(res => console.log('forkJoin res', res));
    `;
  }
}
