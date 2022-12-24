import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VoziloComponent } from './vozilo.component';
import { VoziloEditComponent } from './vozilo-edit/vozilo-edit.component';
import { VoziloListComponent } from './vozilo-list/vozilo-list.component';

const routes: Routes = [
  { path: '', component: VoziloComponent, children: [
    { path: '', pathMatch: 'full', component: VoziloListComponent },
    { path: ':voziloId', component: VoziloEditComponent },
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
export class VoziloRoutingModule { }
