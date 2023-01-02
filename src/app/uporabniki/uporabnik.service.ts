import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import {UporabnikDto} from "./dto/uporabnik.dto";
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UporabnikService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  list(): Observable<UporabnikDto[]> {
    return this.http.get<{ users: UporabnikDto[] }>(`${environment.apiUporabnikiUrl}/users`).pipe(map(data => data.users));
  }

  get(id: number): Observable<UporabnikDto> {
    return this.http.get<UporabnikDto>(`${environment.apiUporabnikiUrl}/users/${id}`);
  }

  create(user: UporabnikDto): Observable<Object> {
    return this.http.post(`${environment.apiUporabnikiUrl}/users`, user);
  }

  update(id: number, user: UporabnikDto): Observable<Object> {
    return this.http.patch(`${environment.apiUporabnikiUrl}/users/${id}`, user);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${environment.apiUporabnikiUrl}/users/${id}`);
  }
}
