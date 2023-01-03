import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./uporabnik.component";
import {UsersListComponent} from "./uporabnik-list/uporabnik-list.component";
import {UporabnikEditComponent} from "./uporabnik-edit/uporabnik-edit.component";

const routes: Routes = [
  { path: '', component: UsersComponent, children: [
    { path: '', pathMatch: 'full', component: UsersListComponent },
      { path: ':uporabnikId', component: UporabnikEditComponent },
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
export class UsersRoutingModule { }
