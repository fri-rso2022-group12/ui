import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { ProizvajalecDto } from '../dto/proizvajalec.dto';
import { ProizvajalecService } from '../proizvajalec.service';

@Component({
  selector: 'app-proizvajalec-edit',
  templateUrl: './proizvajalec-edit.component.html',
  styleUrls: ['./proizvajalec-edit.component.scss']
})
export class ProizvajalecEditComponent implements OnInit, OnDestroy {
  id: number | null = null;

  proizvajalecForm: FormGroup = new FormGroup({
    naziv: new FormControl(undefined, [Validators.maxLength(255), Validators.required])
  });

  private paramsSubscription?: Subscription;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly location: Location,
    private readonly proizvajalecService: ProizvajalecService,
    private readonly toastrService: ToastrService,
  ) { }
  
  private handleError(error: HttpErrorResponse) {
    this.toastrService.error(error.message);
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      if (!isNaN(params['proizvajalecId'])) {
        this.id = +params['proizvajalecId'];
      } else {
        this.id = null;
      }
      this.loadData().then().catch(this.handleError.bind(this));
    });
  }

  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }

  onSubmit() {
    if (!this.proizvajalecForm.valid)
      return;

    if (!this.id) {
      firstValueFrom(this.proizvajalecService.create(this.proizvajalecForm.value)).then(() => {
        this.toastrService.info('Proizvajalec ustvarjen');
        this.location.back();
      }).catch(this.handleError.bind(this));
    } else {
      firstValueFrom(this.proizvajalecService.update(this.id, this.proizvajalecForm.value)).then(() => {
        this.toastrService.info('Proizvajalec posodobljen');
        this.location.back();
      }).catch(this.handleError.bind(this));
    }
  }

  onDeleteClick() {
    if (!this.id)
      return;
    
    firstValueFrom(this.proizvajalecService.delete(this.id)).then(() => {
      this.toastrService.info('Proizvajalec izbrisan');
      this.location.back();
    }).catch(this.handleError.bind(this));
  }

  async loadData() {
    this.proizvajalecForm.reset();
    if (!this.id)
      return;
    const proizvajalec: ProizvajalecDto = await firstValueFrom(this.proizvajalecService.get(this.id));
    if (!proizvajalec)
      return;
    this.proizvajalecForm.patchValue(proizvajalec);
  }
}
