import { ProizvajalecDto } from '../../dto/proizvajalec.dto';

export interface ModelVozilaDto {
  id?: number;
  naziv: string;
  tip?: string | null;
  kapaciteta?: number | null;
  stSedezev?: number | null;
  
  proizvajalecId?: number | null;
  proizvajalec?: ProizvajalecDto | null; 

  dateCreated?: string;
  dateUpdated?: string;
}
