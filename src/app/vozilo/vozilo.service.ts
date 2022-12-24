import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { VoziloDto } from './dto/vozilo.dto';

@Injectable({
  providedIn: 'root'
})
export class VoziloService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  list(): Observable<VoziloDto[]> {
    return this.http.get<VoziloDto[]>(`${environment.apiVozilaUrl}/vozilo`);
  }

  getByModelId(modelId: number): Observable<VoziloDto[]> {
    return this.http.get<VoziloDto[]>(`${environment.apiVozilaUrl}/vozilo/model/${modelId}`);
  }

  get(id: number): Observable<VoziloDto> {
    return this.http.get<VoziloDto>(`${environment.apiVozilaUrl}/vozilo/${id}`);
  }

  create(vozilo: VoziloDto): Observable<Object> {
    return this.http.post(`${environment.apiVozilaUrl}/vozilo`, vozilo);
  }

  update(id: number, vozilo: VoziloDto): Observable<Object> {
    return this.http.patch(`${environment.apiVozilaUrl}/vozilo/${id}`, vozilo);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${environment.apiVozilaUrl}/vozilo/${id}`);
  }
}
