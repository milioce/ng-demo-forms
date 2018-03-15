import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DemoFormsRoutingModule, DemoFormsComponents } from './demoforms-routing.module';

@NgModule({
  imports: [
    DemoFormsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [CommonModule],
  declarations: [DemoFormsComponents]
})
export class DemoFormsModule { }
