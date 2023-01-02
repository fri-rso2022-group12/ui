import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'proizvajalec', loadChildren: () => import('./proizvajalec/proizvajalec.module').then(m => m.ProizvajalecModule) },
  { path: 'vozilo', loadChildren: () => import('./vozilo/vozilo.module').then(m => m.VoziloModule) },
  { path: 'uporabnik', loadChildren: () => import('./uporabniki/uporabnik.module').then(m => m.UserModule) },
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
