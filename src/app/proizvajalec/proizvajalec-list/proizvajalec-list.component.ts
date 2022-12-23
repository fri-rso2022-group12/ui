import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom } from 'rxjs';

import { ProizvajalecDto } from '../dto/proizvajalec.dto';
import { ProizvajalecService } from '../proizvajalec.service';

@Component({
  selector: 'app-proizvajalec-list',
  templateUrl: './proizvajalec-list.component.html',
  styleUrls: ['./proizvajalec-list.component.scss']
})
export class ProizvajalecListComponent implements OnInit {

  proizvajalci: ProizvajalecDto[] = [];

  constructor(
    private readonly proizvajalecService: ProizvajalecService,
    private readonly toastrService: ToastrService,
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
    const proizvajalci = await firstValueFrom(this.proizvajalecService.list());
    this.proizvajalci.splice(0, this.proizvajalci.length);
    proizvajalci.forEach((item) => this.proizvajalci.push(item));
  }
}
