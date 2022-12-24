import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModelVozilaEditComponent } from './model-vozila/model-vozila-edit/model-vozila-edit.component';
import { ModelVozilaIzdelaveComponent } from './model-vozila/model-vozila-izdelave/model-vozila-izdelave.component';
import { ModelVozilaListComponent } from './model-vozila/model-vozila-list/model-vozila-list.component';
import { ModelVozilaService } from './model-vozila/model-vozila.service';
import { ProizvajalecComponent } from './proizvajalec.component';
import { ProizvajalecEditComponent } from './proizvajalec-edit/proizvajalec-edit.component';
import { ProizvajalecListComponent } from './proizvajalec-list/proizvajalec-list.component';
import { ProizvajalecRoutingModule } from './proizvajalec-routing.module';
import { ProizvajalecService } from './proizvajalec.service';

@NgModule({
  declarations: [
    ModelVozilaEditComponent,
    ModelVozilaIzdelaveComponent,
    ModelVozilaListComponent,
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
    ModelVozilaService,
    ProizvajalecService,
  ],
})
export class ProizvajalecModule { }
