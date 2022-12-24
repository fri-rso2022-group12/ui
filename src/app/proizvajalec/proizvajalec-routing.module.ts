import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModelVozilaEditComponent } from './model-vozila/model-vozila-edit/model-vozila-edit.component';
import { ModelVozilaIzdelaveComponent } from './model-vozila/model-vozila-izdelave/model-vozila-izdelave.component';
import { ModelVozilaListComponent } from './model-vozila/model-vozila-list/model-vozila-list.component';
import { ProizvajalecComponent } from './proizvajalec.component';
import { ProizvajalecEditComponent } from './proizvajalec-edit/proizvajalec-edit.component';
import { ProizvajalecListComponent } from './proizvajalec-list/proizvajalec-list.component';

const routes: Routes = [
  { path: '', component: ProizvajalecComponent, children: [
    { path: '', pathMatch: 'full', component: ProizvajalecListComponent },
    { path: 'model-vozila', component: ModelVozilaListComponent },
    { path: ':proizvajalecId', component: ProizvajalecEditComponent },
    { path: ':proizvajalecId/model-vozila', component: ModelVozilaListComponent },
    { path: ':proizvajalecId/model-vozila/:modelId', component: ModelVozilaEditComponent },
    { path: ':proizvajalecId/model-vozila/:modelId/izdelave', component: ModelVozilaIzdelaveComponent },
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
