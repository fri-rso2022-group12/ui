import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ProizvajalecDto } from './dto/proizvajalec.dto';

@Injectable({
  providedIn: 'root'
})
export class ProizvajalecService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  list(): Observable<ProizvajalecDto[]> {
    return this.http.get<ProizvajalecDto[]>(`${environment.apiTipVozilUrl}/proizvajalec`);
  }

  get(id: number): Observable<ProizvajalecDto> {
    return this.http.get<ProizvajalecDto>(`${environment.apiTipVozilUrl}/proizvajalec/${id}`);
  }

  create(proizvajalec: ProizvajalecDto): Observable<Object> {
    return this.http.post(`${environment.apiTipVozilUrl}/proizvajalec`, proizvajalec);
  }

  update(id: number, proizvajalec: ProizvajalecDto): Observable<Object> {
    return this.http.patch(`${environment.apiTipVozilUrl}/proizvajalec/${id}`, proizvajalec);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${environment.apiTipVozilUrl}/proizvajalec/${id}`);
  }
}
