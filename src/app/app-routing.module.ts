import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },

  { path: '**', component: ErrorComponent, data: { message: 'Not found' }},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
