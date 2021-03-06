import { GraficosService } from './../graficos.service';
import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Graficos } from '../graficos';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  graficos: Graficos[] = [];

  constructor(private service: GraficosService) {
  }

  ngOnInit(): void {
      this.service.getTotais().subscribe(
      data =>{
        this.lineChartData[0].data = data.map(g=> parseInt((g.total).toString()))
        this.lineChartLabels = data.map(g=> g.categoria)
      })
  }

  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }]
   }
  };
  lineChartColors: Color[] = [
  {
    borderColor: [
      'rgba(255,0,0,0.5)',
      'rgba(54, 75, 181, 0.5)',
      'rgba(114, 155, 59, 0.5)',
      'rgba(102, 59, 155, 0.5)'
    ],
    backgroundColor: [
      'rgba(255,0,0,0.3)',
      'rgba(54, 75, 181, 0.3)',
      'rgba(114, 155, 59, 0.3)',
      'rgba(102, 59, 155, 0.3)'
    ]
  }];

  lineChartLabels: Label[] = [];
  lineChartType: ChartType = 'line';
  lineChartLegend = true;
  lineChartPlugins = [];

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Quantidade de registros por categoria' }
  ];
}
