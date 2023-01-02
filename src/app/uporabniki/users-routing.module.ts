import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./uporabnik.component";
import {UsersListComponent} from "./uporabnik-list/uporabnik-list.component";

const routes: Routes = [
  { path: '', component: UsersComponent, children: [
    { path: '', pathMatch: 'full', component: UsersListComponent },
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
