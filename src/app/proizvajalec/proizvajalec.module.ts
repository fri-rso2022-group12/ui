import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProizvajalecComponent } from './proizvajalec.component';
import { ProizvajalecRoutingModule } from './proizvajalec-routing.module';


@NgModule({
  declarations: [
    ProizvajalecComponent,
  ],
  imports: [
    CommonModule,
    ProizvajalecRoutingModule,
  ]
})
export class ProizvajalecModule { }
