import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ModelVozilaDto } from './dto/model-vozila.dto';
import { ModelVozilaIzdelavaDto } from './dto/model-vozila-izdelava.dto';

@Injectable({
  providedIn: 'root'
})
export class ModelVozilaService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  list(): Observable<ModelVozilaDto[]> {
    return this.http.get<ModelVozilaDto[]>(`${environment.apiTipVozilUrl}/model-vozila`);
  }

  getByProizvajalecId(proizvajalecId: number): Observable<ModelVozilaDto[]> {
    return this.http.get<ModelVozilaDto[]>(`${environment.apiTipVozilUrl}/model-vozila/proizvajalec/${proizvajalecId}`);
  }

  get(id: number): Observable<ModelVozilaDto> {
    return this.http.get<ModelVozilaDto>(`${environment.apiTipVozilUrl}/model-vozila/${id}`);
  }

  getIzdelaveById(id: number): Observable<ModelVozilaIzdelavaDto[]> {
    return this.http.get<ModelVozilaIzdelavaDto[]>(`${environment.apiTipVozilUrl}/model-vozila/${id}/izdelave`);
  }

  create(modelVozila: ModelVozilaDto): Observable<Object> {
    return this.http.post(`${environment.apiTipVozilUrl}/model-vozila`, modelVozila);
  }

  update(id: number, modelVozila: ModelVozilaDto): Observable<Object> {
    return this.http.patch(`${environment.apiTipVozilUrl}/model-vozila/${id}`, modelVozila);
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(`${environment.apiTipVozilUrl}/model-vozila/${id}`);
  }
}
