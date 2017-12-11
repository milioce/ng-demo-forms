import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/filter';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-rxjs-mergemap',
  templateUrl: 'mergemap.component.html'
})
export class MergemapComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  test1() {
    const ids = [1, 2, 3, 4];
    const source$ = Observable.from(ids);

    const outer$ = (id) => {
      return Observable.interval(500).take(3)
        .map(res => {
          return {id: id, value: res};
        });
    };

    source$.mergeMap(id => outer$(id)).subscribe(
      res => console.log('mergeMap res', res)
    );
  }

  test2() {
    const ids = [1, 2, 3, 4];
    const users: User[] = [
      {id: 1, name: 'Emilio'},
      {id: 2, name: 'Sonia'},
      {id: 3, name: 'Ana'},
      {id: 4, name: 'Jose'},
      {id: 5, name: 'Juan'},
      {id: 6, name: 'Carlos'}
    ];
    const users$ = Observable.from(ids);
    const getUser$ = (id) => Observable.from(users).filter(user => user.id === id);

    users$.mergeMap(id => getUser$(id))
      .subscribe(
        user => console.log(user)
      );
  }

  onTest1() {
    console.clear();
    this.test1();
  }

  onTest2() {
    console.clear();
    this.test2();
  }


  get code1() {
    return `
const ids = [1, 2, 3, 4];
const source$ = Observable.from(ids);

const outer$ = (id) => {
  return Observable.interval(500).take(3)
    .map(res => {
      return {id: id, value: res};
    });
};

source$.mergeMap(id => outer$(id)).subscribe(
  res => console.log('mergeMap res', res)
);
    `;
  }

  get code2() {
    return `
const ids = [1, 2, 3, 4];
const users: User[] = [
  {id: 1, name: 'Emilio'},
  {id: 2, name: 'Sonia'},
  {id: 3, name: 'Ana'},
  {id: 4, name: 'Jose'},
  {id: 5, name: 'Juan'},
  {id: 6, name: 'Carlos'}
];
const users$ = Observable.from(ids);
const getUser$ = (id) => Observable.from(users).filter(user => user.id === id);

users$.mergeMap(id => getUser$(id))
  .subscribe(
    user => console.log(user)
  );
    `;
  }
}
