import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControlStatusDirective } from './directives/form-control-status.directive';

@NgModule({
  declarations: [
    FormControlStatusDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormControlStatusDirective,
  ],
})
export class CommonLocalModule { }
