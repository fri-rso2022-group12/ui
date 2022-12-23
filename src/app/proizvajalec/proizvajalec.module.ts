import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProizvajalecComponent } from './proizvajalec.component';
import { ProizvajalecEditComponent } from './proizvajalec-edit/proizvajalec-edit.component';
import { ProizvajalecListComponent } from './proizvajalec-list/proizvajalec-list.component';
import { ProizvajalecRoutingModule } from './proizvajalec-routing.module';
import { ProizvajalecService } from './proizvajalec.service';

@NgModule({
  declarations: [
    ProizvajalecComponent,
    ProizvajalecEditComponent,
    ProizvajalecListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProizvajalecRoutingModule,
  ],
  providers: [
    ProizvajalecService,
  ],
})
export class ProizvajalecModule { }
