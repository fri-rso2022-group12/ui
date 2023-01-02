import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UsersComponent} from "./uporabnik.component";
import {UsersListComponent} from "./uporabnik-list/uporabnik-list.component";
import {UsersRoutingModule} from "./users-routing.module";


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ]
})
export class UserModule { }
