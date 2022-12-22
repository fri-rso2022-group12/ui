import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VoziloComponent } from './vozilo.component';

const routes: Routes = [
  { path: '**', component: VoziloComponent },
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
