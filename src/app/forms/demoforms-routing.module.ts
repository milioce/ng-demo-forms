import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoFormsComponent } from './demoforms.component';
import { ReactiveFormsComponent } from './reactive/reactive-forms.component';

const routes: Routes = [
  { path: '', component: DemoFormsComponent, children: [
      { path: 'reactive', component: ReactiveFormsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemoFormsRoutingModule { }

export const DemoFormsComponents = [
  DemoFormsComponent,
  ReactiveFormsComponent
];

