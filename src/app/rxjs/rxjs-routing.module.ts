import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxjsComponent } from './rxjs.component';
import { ConcatComponent } from './components/concat/concat.component';
import { ForkjoinComponent } from './components/forkjoin/forkjoin.component';
import { SwitchMapComponent } from './components/switchmap/switchmap.components';
import { MergemapComponent } from './components/mergemap/mergemap.component';
import { CardCodeComponent } from './shared/card-code.component';
import { PairwiseComponent } from './components/pairwise/pairwise.component';
import { CombineLatestComponent } from './components/combinelatest/combinelatest.component';

const routes: Routes = [
  { path: '', component: RxjsComponent, children: [
      { path: 'concat', component: ConcatComponent},
      { path: 'forkjoin', component: ForkjoinComponent},
      { path: 'mergemap', component: MergemapComponent},
      { path: 'switchmap', component: SwitchMapComponent},
      { path: 'pairwise', component: PairwiseComponent},
      { path: 'combinelatest', component: CombineLatestComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxjsRoutingModule { }

export const RxjsComponents = [
  RxjsComponent,
  ConcatComponent,
  ForkjoinComponent,
  SwitchMapComponent,
  MergemapComponent,
  CardCodeComponent,
  PairwiseComponent,
  CombineLatestComponent
];

