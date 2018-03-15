import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/interval';

import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/take';

@Component({
    selector: 'app-rxjs-concat',
    templateUrl: './concat.component.html'
})

export class ConcatComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        const getPostOne$ = Observable.timer(3000).mapTo({type: 'one', value: 1});
        const getPostTwo$ = Observable.timer(1000).mapTo({type: 'two', value: 2});

        Observable.concat(getPostOne$, getPostTwo$).subscribe(
            res => console.log(res)
        );

        Observable
            .timer(1000, 1500)
            .take(5)
            .subscribe(
                res => console.log('timer', res),
                (err) => null,
                () => console.log('timer completed')
            );

        Observable.interval(1000)
            .take(3)
            .subscribe(
                res => console.log('interval', res),
                (err) => null,
                () => console.log('interval completed')
            );
}
}
