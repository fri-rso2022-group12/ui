import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom, Subscription } from 'rxjs';

import { ModelVozilaIzdelavaDto } from '../dto/model-vozila-izdelava.dto';
import { ModelVozilaService } from '../model-vozila.service';

@Component({
  selector: 'app-model-vozila-izdelave',
  templateUrl: './model-vozila-izdelave.component.html',
  styleUrls: ['./model-vozila-izdelave.component.scss']
})
export class ModelVozilaIzdelaveComponent implements OnInit, OnDestroy {

  proizvajalecId: number | null = null;
  izdelaveModelaVozil: ModelVozilaIzdelavaDto[] = [];

  private paramsSubscription?: Subscription;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly modelVozilaService: ModelVozilaService,
    private readonly toastrService: ToastrService,
  ) { }
  
  private handleError(error: HttpErrorResponse) {
    this.toastrService.error(error.message);
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      if (!isNaN(params['proizvajalecId'])) {
        this.proizvajalecId = +params['proizvajalecId'];
      } else {
        this.proizvajalecId = null;
      }
      this.onRefreshClick();
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();  
  }

  onRefreshClick(viaButton: boolean = false) {
    this.loadData().then(() => {
      if (viaButton)
        this.toastrService.info('Refreshed');
    }).catch(this.handleError.bind(this));
  }

  async loadData() {
    if (!this.proizvajalecId)
      return;
    const izdelave = await firstValueFrom(this.modelVozilaService.getIzdelaveById(this.proizvajalecId));
    this.izdelaveModelaVozil.splice(0, this.izdelaveModelaVozil.length);
    izdelave.forEach((item) => this.izdelaveModelaVozil.push(item));
  }
}
