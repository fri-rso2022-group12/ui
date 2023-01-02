import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PotRoutingModule} from "./pot-routing.module";
import {PotDisplayComponent} from "./pot-display/pot-display.component";
import {PotComponent} from "./pot.component";


@NgModule({
  declarations: [
    PotComponent,
    PotDisplayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PotRoutingModule,
  ]
})
export class PotModule { }
