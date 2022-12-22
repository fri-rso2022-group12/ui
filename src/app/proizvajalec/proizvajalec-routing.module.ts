import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProizvajalecComponent } from './proizvajalec.component';

const routes: Routes = [
  { path: '**', component: ProizvajalecComponent },
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
