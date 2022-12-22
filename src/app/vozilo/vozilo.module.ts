import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoziloComponent } from './vozilo.component';
import { VoziloRoutingModule } from './vozilo-routing.module';

@NgModule({
  declarations: [
    VoziloComponent,
  ],
  imports: [
    CommonModule,
    VoziloRoutingModule,
  ]
})
export class VoziloModule { }
