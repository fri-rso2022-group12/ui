import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { firstValueFrom, Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { UporabnikDto } from '../dto/uporabnik.dto';
import { UporabnikService } from '../uporabnik.service';

@Component({
  selector: 'app-uporabnik-edit',
  templateUrl: './uporabnik-edit.component.html',
  styleUrls: ['./uporabnik-edit.component.scss']
})
export class UporabnikEditComponent implements OnInit, OnDestroy {
  id: number | null = null;


  userForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    name: new FormControl(null, [Validators.required]),
  });

  private paramsSubscription?: Subscription;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly location: Location,
    private readonly toastrService: ToastrService,
    private readonly UporabnikService: UporabnikService,
  ) { }

  private handleError(error: HttpErrorResponse) {
    this.toastrService.error(error.message);
  }

  ngOnInit(): void {
    this.paramsSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      if (!isNaN(params['uporabnikId'])) {
        this.id = + params['uporabnikId'];
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
    if (!this.userForm.valid)
      return;

    if (!this.id) {
      firstValueFrom(this.UporabnikService.create(this.userForm.value)).then(() => {
        this.toastrService.info('Uporabnik ustvarjen');
        this.location.back();
      }).catch(this.handleError.bind(this));
    } else {
      firstValueFrom(this.UporabnikService.update(this.id, this.userForm.value)).then(() => {
        this.toastrService.info('Uporabnik posodobljen');
        this.location.back();
      }).catch(this.handleError.bind(this));
    }
  }

  onDeleteClick() {
    if (!this.id)
      return;

    firstValueFrom(this.UporabnikService.delete(this.id)).then(() => {
      this.toastrService.info('Uporabnik izbrisan');
      this.location.back();
    }).catch(this.handleError.bind(this));
  }

  async loadData() {
    this.userForm.reset();
    if (!this.id)
      return;
    const user: UporabnikDto = await firstValueFrom(this.UporabnikService.get(this.id));
    if (!user)
      return;
    this.userForm.patchValue(user);
  }
}
