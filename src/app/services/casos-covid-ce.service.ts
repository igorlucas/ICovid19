import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filtro } from '../models/filtro';

@Injectable({
  providedIn: 'root'
})
export class CasosCovidCeService {
    private dataPrimeiroCasoString = "2020-03-01";
    private dataPrimeiroCasoDate = new Date("2020-03-01T03:00:00.000+0000");
    private api = "https://indicadores.integrasus.saude.ce.gov.br/api/casos-coronavirus";
  constructor(private http: HttpClient) { }

  getCasos(dataInicio: string, dataFim: string){
    return this.http.get<any>(`${this.api}?dataInicio=${dataInicio}&dataFim=${dataFim}`);
  }
}
