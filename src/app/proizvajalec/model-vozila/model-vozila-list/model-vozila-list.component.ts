import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { firstValueFrom, Subscription } from 'rxjs';

import { ModelVozilaDto } from '../dto/model-vozila.dto';
import { ModelVozilaService } from '../model-vozila.service';

@Component({
  selector: 'app-model-vozila-list',
  templateUrl: './model-vozila-list.component.html',
  styleUrls: ['./model-vozila-list.component.scss']
})
export class ModelVozilaListComponent implements OnInit, OnDestroy {
  proizvajalecId: number | null = null;

  modeliVozil: ModelVozilaDto[] = [];

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
        // TODO: Recirect back ?
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

  pridobiTip(oznaka?: string | null) {
    switch (oznaka) {
      case 'B': return 'Bencin';
      case 'D': return 'Diesel';
      case 'P': return 'Plin';
      case 'E': return 'Elektrika';
      default: return '';
    }
  }

  async loadData() {
    const modeliVozil = await firstValueFrom(this.modelVozilaService.getByProizvajalecId(this.proizvajalecId!));
    this.modeliVozil.splice(0, this.modeliVozil.length);
    modeliVozil.forEach((item) => this.modeliVozil.push(item));
  }
}
