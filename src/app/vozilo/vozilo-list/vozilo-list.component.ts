import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';

import { VoziloDto } from '../dto/vozilo.dto';
import { VoziloService } from '../vozilo.service';

@Component({
  selector: 'app-vozilo-list',
  templateUrl: './vozilo-list.component.html',
  styleUrls: ['./vozilo-list.component.scss']
})
export class VoziloListComponent implements OnInit {

  vozila: VoziloDto[] = [];

  constructor(
    private readonly toastrService: ToastrService,
    private readonly voziloService: VoziloService,
  ) { }

  private handleError(error: HttpErrorResponse) {
    this.toastrService.error(error.message);
  }

  ngOnInit(): void {
    this.onRefreshClick();
  }

  onRefreshClick(viaButton: boolean = false) {
    this.loadData().then(() => {
      if (viaButton)
        this.toastrService.info('Refreshed');
    }).catch(this.handleError.bind(this));
  }

  async loadData() {
    const vozila = await firstValueFrom(this.voziloService.list());
    this.vozila.splice(0, this.vozila.length);
    vozila.forEach((item) => this.vozila.push(item));
  }
}
