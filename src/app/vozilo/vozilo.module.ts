import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VoziloComponent } from './vozilo.component';
import { VoziloEditComponent } from './vozilo-edit/vozilo-edit.component';
import { VoziloListComponent } from './vozilo-list/vozilo-list.component';
import { VoziloRoutingModule } from './vozilo-routing.module';

@NgModule({
  declarations: [
    VoziloComponent,
    VoziloEditComponent,
    VoziloListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VoziloRoutingModule,
  ]
})
export class VoziloModule { }
