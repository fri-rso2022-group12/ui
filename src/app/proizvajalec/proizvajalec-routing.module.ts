import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProizvajalecComponent } from './proizvajalec.component';
import { ProizvajalecEditComponent } from './proizvajalec-edit/proizvajalec-edit.component';
import { ProizvajalecListComponent } from './proizvajalec-list/proizvajalec-list.component';

const routes: Routes = [
  { path: '', component: ProizvajalecComponent, children: [
    { path: '', pathMatch: 'full', component: ProizvajalecListComponent },
    { path: ':proizvajalecId', component: ProizvajalecEditComponent },
  ]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ProizvajalecRoutingModule { }
