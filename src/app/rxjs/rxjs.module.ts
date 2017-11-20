import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RxjsRoutingModule, RxjsComponents } from './rxjs-routing.module';

@NgModule({
    imports: [RxjsRoutingModule, CommonModule],
    exports: [CommonModule],
    declarations: [RxjsComponents],
    providers: [],
})
export class RxjsModule { }
