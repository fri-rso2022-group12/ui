export interface VoziloDto {
  id?: number;
  registrskaOznaka: string;
  vin?: string | null;
  modelId: number;
  kapaciteta?: number | null;
  dateCreated?: string;
  dateUpdated?: string;
}
