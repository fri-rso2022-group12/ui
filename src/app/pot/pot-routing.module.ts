import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PotComponent} from "./pot.component";
import {PotDisplayComponent} from "./pot-display/pot-display.component";

const routes: Routes = [
  { path: '', component: PotComponent, children: [
    { path: '', pathMatch: 'full', component: PotDisplayComponent },
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PotRoutingModule { }
