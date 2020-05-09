import { DatasFiltro } from "./datasFiltro";

export class Filtro {
    campoData: DatasFiltro;
    dataInicio: Date;
    dataFim: Date;
    constructor(_campoData: DatasFiltro[]){
      this.dataInicio = new Date("2020-03-01T03:00:00.000+0000");
      this.dataFim = new Date();
      this.campoData = _campoData.filter(c=> c.campo == "dataObito")[0]; 
    }
  }