import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { ModelVozilaDto } from '../dto/model-vozila.dto';
import { ModelVozilaService } from '../model-vozila.service';
import { ProizvajalecDto } from '../../dto/proizvajalec.dto';
import { ProizvajalecService } from '../../proizvajalec.service';

@Component({
  selector: 'app-model-vozila-edit',
  templateUrl: './model-vozila-edit.component.html',
  styleUrls: ['./model-vozila-edit.component.scss']
})
export class ModelVozilaEditComponent implements OnInit, OnDestroy {
  id: number | null = null;
  proizvajalecId: number | null = null;
  proizvajalec: ProizvajalecDto | null  = null;

  modelVozilaForm: FormGroup = new FormGroup({
    naziv: new FormControl(undefined, [Validators.maxLength(255), Validators.required]),
    tip: new FormControl(null, [Validators.maxLength(1), Validators.minLength(1)]),
    kapaciteta: new FormControl(null, [Validators.min(0)]),
    stSedezev: new FormControl(null, [Validators.min(0)]),
    proizvajalecId: new FormControl(null, [Validators.min(0)]),
  });

  private paramsSubscription?: Subscription;

  constructor(
    private readonly acitvatedRoute: ActivatedRoute,
    private readonly location: Location,
    private readonly modelVozilaService: ModelVozilaService,
    private readonly proizvajalecService: ProizvajalecService,
    private readonly toastrService: ToastrService,
  ) { }

  private handleError(error: HttpErrorResponse) {
    this.toastrService.error(error.message);
  }

  ngOnInit(): void {
    this.paramsSubscription = this.acitvatedRoute.params.subscribe((params: Params) => {
      if (!isNaN(params['modelId'])) {
        this.id = +params['modelId'];
      } else {
        this.id = null;
      }
      if (!isNaN(params['proizvajalecId'])) {
        this.proizvajalecId = +params['proizvajalecId'];
      } else {
        this.proizvajalecId = null;
      }
      this.loadData().then().catch(this.handleError.bind(this));
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

  onSubmit() {
    if (!this.modelVozilaForm.valid)
      return;
    
    if (!this.id) {
      firstValueFrom(this.modelVozilaService.create(this.modelVozilaForm.value)).then(() => {
        this.toastrService.info('Model vozila ustvarjen');
        this.location.back();
      }).catch(this.handleError.bind(this));
    } else {
      firstValueFrom(this.modelVozilaService.update(this.id, this.modelVozilaForm.value)).then(() => {
        this.toastrService.info('Model vozila posodobljen');
        this.location.back();
      }).catch(this.handleError.bind(this));
    }
  }

  onDeleteClick() {
    if (!this.id)
      return;

    firstValueFrom(this.modelVozilaService.delete(this.id)).then(() => {
      this.toastrService.info('Model vozila izbrisan');
      this.location.back();
    }).catch(this.handleError.bind(this));
  }

  async loadData() {
    this.modelVozilaForm.reset();
    if (!this.id) {
      if (this.proizvajalecId) {
        this.proizvajalec = await firstValueFrom(this.proizvajalecService.get(this.proizvajalecId));
        this.modelVozilaForm.patchValue({ proizvajalecId: this.proizvajalecId });
      }
      return;
    }
      
    const modelVozila: ModelVozilaDto = await firstValueFrom(this.modelVozilaService.get(this.id));
    if (!modelVozila)
      return;
    this.proizvajalec = (modelVozila.proizvajalec) ? modelVozila.proizvajalec : null;
    this.modelVozilaForm.patchValue(modelVozila);
  }
}
