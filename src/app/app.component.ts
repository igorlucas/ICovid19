import { Component, OnInit } from '@angular/core';
import { Indices } from './models/indices';
import { CasosCovidCeService } from './services/casos-covid-ce.service';
import { Filtro } from './models/filtro';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'iCovid19';
  casos: Array<Indices>;
  indicadores: any[];
  datasFiltro: any[];
  filtro: Filtro;
  opened:any;
  constructor(private casosCovidService: CasosCovidCeService) {
  }

  ngOnInit(): void {
    this.loadDatasFiltro();
    this.filtro = new Filtro(this.datasFiltro);
    this.loadIndicadores();
  }

  loadDatasFiltro() {
    this.datasFiltro = [
      { campo: 'dataEntradaUtisSvep', descricao: 'Data de entrada na UTI' },
      { campo: 'dataEvolucaoCasoSivep', descricao: 'Data do diagnóstico de evolução' },
      { campo: 'dataInicioSintomas', descricao: 'Data de início dos sintomas' },
      { campo: 'dataInternacaoSivep', descricao: 'Data de início dos sintomas' },
      { campo: 'dataNotificacao', descricao: 'Data de notificação do exame' },
      { campo: 'dataObito', descricao: 'Data do óbito' },
      { campo: 'dataResultadoExame', descricao: 'Data do resultado do exame' },
      { campo: 'dataSaidaUtisSvep', descricao: 'Data de saída da UTI' },
      { campo: 'dataSolicitacaoExame', descricao: 'Data de solicitação de exame' },
    ];
    //1 dataEntradaUtisSvep - Data de entrada na UTI - Data
    //2 dataEvolucaoCasoSivep - Data do diagnóstico de evolução - Data
    //3 dataInicioSintomas - Data de início dos sintomas - Data
    //4 dataInternacaoSivep - Data de internação do paciente - Data
    //5 dataNotificacao - Data de notificação do exame - Data
    //6 dataObito - Data do óbito - Data
    //7 dataResultadoExame - Data do resultado do exame - Data
    //8 dataSaidaUtisSvep - Data de saída da UTI - Data
    //9 dataSolicitacaoExame - Data de solicitação de exame - Data
  }

  loadIndicadores() {
    let dataInicio = `${this.filtro.dataInicio.getFullYear()}-${this.filtro.dataInicio.getMonth() + 1}-${this.filtro.dataInicio.getDate()}`;
    let dataFim = `${this.filtro.dataFim.getFullYear()}-${this.filtro.dataFim.getMonth() + 1}-${this.filtro.dataFim.getDate()}`;
    this.casosCovidService.getCasos(dataInicio, dataFim).subscribe(res => {
      let filtroData = this.filtro.campoData.campo;
      this.casos = res.filter(r => r[filtroData]).sort((a, b) => b[filtroData] - a[filtroData]);
      let datasAnteriores = new Array<any>();
      let lista = [];
      this.casos.forEach(c => {
        if (datasAnteriores && !datasAnteriores.includes(c[filtroData])) {
          var data = new Date(c[filtroData]);
          let total = this.casos
            .filter(e => e[filtroData] == c[filtroData])
            .sort((a, b) => b[filtroData] - a[filtroData])
            .length;

          lista.push({ data: data, total: total });
        }
        datasAnteriores.push(c.dataObito);
      });
      this.indicadores = lista;
    });
  }

  filtrar(){
    this.indicadores = null;
    this.loadIndicadores();
  }

  // stilos
  containerStyle = {
    'height': `${screen.height}px`
  }

  sidenavStyle = {
    'background-color': 'rgb(2, 2, 56)',
    'width': `200px`
  }
}
