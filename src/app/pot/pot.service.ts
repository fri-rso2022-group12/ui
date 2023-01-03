import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import {PotDto} from "./dto/pot.dto";
import { map } from 'rxjs';
import {UporabnikDto} from "../uporabniki/dto/uporabnik.dto";
import {PotQueryDto} from "./dto/pot-query.dto";
import {AbstractControl} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class PotService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  display(from: string, to: string): Observable<PotDto> {
    const params = new URLSearchParams({from, to})
    return this.http.get<PotDto>(`${environment.apiPotUrl}/path?${params}`);
  }
}
