import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { ModelVozilaDto } from '../../proizvajalec/model-vozila/dto/model-vozila.dto';
import { ModelVozilaService } from '../../proizvajalec/model-vozila/model-vozila.service';
import { VoziloDto } from '../dto/vozilo.dto';
import { VoziloService } from '../vozilo.service';

@Component({
  selector: 'app-vozilo-edit',
  templateUrl: './vozilo-edit.component.html',
  styleUrls: ['./vozilo-edit.component.scss']
})
export class VoziloEditComponent implements OnInit, OnDestroy {
  id: number | null = null;

  modeliVozil: ModelVozilaDto[] = [];

  voziloForm: FormGroup = new FormGroup({
    registrskaOznaka: new FormControl(undefined, [Validators.maxLength(16), Validators.required]),
    vin: new FormControl(null, [Validators.maxLength(64)]),
    modelId: new FormControl(null, [Validators.min(0), Validators.required]),
    kapaciteta: new FormControl(undefined, [Validators.min(0)]),
  });

  private paramsSubscription?: Subscription;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly location: Location,
    private readonly modelVozilaService: ModelVozilaService,
    private readonly toastrService: ToastrService,
    private readonly voziloService: VoziloService,
  ) { }
  
  private handleError(error: HttpErrorResponse) {
    this.toastrService.error(error.message);
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      if (!isNaN(params['voziloId'])) {
        this.id = + params['voziloId'];
      } else {
        this.id = null;
      }
      this.loadData().then().catch(this.handleError.bind(this));
    });

    // Load ModelVozila
    firstValueFrom(this.modelVozilaService.list()).then((modeliVozil: ModelVozilaDto[]) => {
      modeliVozil.forEach((item) => this.modeliVozil.push(item));
    }).catch(this.handleError.bind(this));
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

  onSubmit() {
    if (!this.voziloForm.valid)
      return;

    if (!this.id) {
      firstValueFrom(this.voziloService.create(this.voziloForm.value)).then(() => {
        this.toastrService.info('Vozilo ustvarjeno');
        this.location.back();
      }).catch(this.handleError.bind(this));
    } else {
      firstValueFrom(this.voziloService.update(this.id, this.voziloForm.value)).then(() => {
        this.toastrService.info('Vozilo posodobljeno');
        this.location.back();
      }).catch(this.handleError.bind(this));
    }
  }

  onDeleteClick() {
    if (!this.id)
      return;

    firstValueFrom(this.voziloService.delete(this.id)).then(() => {
      this.toastrService.info('Vozilo izbrisano');
      this.location.back();
    }).catch(this.handleError.bind(this));
  }

  async loadData() {
    this.voziloForm.reset();
    if (!this.id)
      return;
    const vozilo: VoziloDto = await firstValueFrom(this.voziloService.get(this.id));
    if (!vozilo)
      return;
    this.voziloForm.patchValue(vozilo);
  }
}
