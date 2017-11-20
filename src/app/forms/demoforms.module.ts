import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DemoFormsRoutingModule, DemoFormsComponents } from './demoforms-routing.module';

@NgModule({
  imports: [
    DemoFormsRoutingModule,
    CommonModule,
    ReactiveFormsModule],
  exports: [CommonModule],
  declarations: [DemoFormsComponents]
})
export class DemoFormsModule { }
