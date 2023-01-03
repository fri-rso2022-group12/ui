import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';

import { PotDto } from '../dto/pot.dto';
import { PotService } from '../pot.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-vozilo-list',
  templateUrl: './pot-display.component.html',
  styleUrls: ['./pot-display.component.scss']
})
export class PotDisplayComponent implements OnInit {
  pathForm: FormGroup = new FormGroup({
    from: new FormControl(null, [Validators.required]),
    to: new FormControl(null, [Validators.required]),
  });
  pot: PotDto = {route: [""]};

  constructor(
    private readonly toastrService: ToastrService,
    private readonly potService: PotService,
  ) { }

  private handleError(error: HttpErrorResponse) {
    this.toastrService.error(error.message);
  }

  ngOnInit(): void {
  }


  async loadData() {
    const pot: PotDto = await firstValueFrom(this.potService.display(this.pathForm.get("from")?.value, this.pathForm.get("to")?.value))
    this.pot = pot
  }
}
