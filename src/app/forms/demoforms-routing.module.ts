import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoFormsComponent } from './demoforms.component';
import { TemplateFormsComponent } from './template/template-forms.component';
import { ReactiveFormsComponent } from './reactive/reactive-forms.component';
import { MyControlComponent } from './reactive/mycontrol.component';

const routes: Routes = [
  { path: '', component: DemoFormsComponent, children: [
    { path: 'template', component: TemplateFormsComponent},
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
  TemplateFormsComponent,
  ReactiveFormsComponent,
  MyControlComponent
];

