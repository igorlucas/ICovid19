import { Component, OnInit, NgZone, Input, AfterViewInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { IndicadorDataTotal } from '../models/indicadorDataTotal';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit, AfterViewInit {
  private chart: am4charts.XYChart;
  @Input() id: number;
  @Input() data: Array<IndicadorDataTotal>;
  container: string;
  cabecalho: string[];

  constructor(private zone: NgZone) {
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      //Create chart instance
      let chart = am4core.create("chartdiv_"+this.id, am4charts.XYChart);
      chart.dateFormatter.inputDateFormat = "dd-MM-yyyyy";

      //Add data
      chart.data = this.data.sort((a, b) => b.data.getTime() - a.data.getTime());

      //Create axes
      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.startLocation = 0.5;
      dateAxis.endLocation = 0.5;

      //Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      //Create series
      let series: any = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "total";
      series.dataFields.dateX = "data";
      series.strokeWidth = 3;
      series.tooltipText = "{valueY.value}";
      series.fillOpacity = 0.1;

      //Create a range to change stroke for values below 0
      let range = valueAxis.createSeriesRange(series);
      range.value = 0;
      range.endValue = -1000;
      range.contents.stroke = chart.colors.getIndex(4);
      range.contents.fill = range.contents.stroke;
      range.contents.strokeOpacity = 0.7;
      range.contents.fillOpacity = 0.1;

      //Add cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.xAxis = dateAxis;
      chart.scrollbarX = new am4core.Scrollbar();

      series.tooltip.getFillFromObject = false;
      series.tooltip.adapter.add("x", (x, target) => {
        if (series.tooltip.tooltipDataItem.valueY < 0) {
          series.tooltip.background.fill = chart.colors.getIndex(4);
        }
        else {
          series.tooltip.background.fill = chart.colors.getIndex(0);
        }
        return x;
      })

      this.chart = chart;
    });
  }

  ngOnInit() {
    //this.container = "chartdiv_" + this.id;
    console.log(this);
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
