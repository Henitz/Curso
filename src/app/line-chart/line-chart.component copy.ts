import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  clientes: Clientes[] = [];

  constructor(private service: ClientesService) {
  }

  ngOnInit(): void {
      this.service.getAll().subscribe(
      data =>{
        this.lineChartData[0].data = data.map(c=> parseInt((c.quantidadeFuncionarios).toString()))
        this.lineChartLabels = data.map(c => c.nome)
      })
  }

  lineChartOptions: ChartOptions = {
    responsive: true,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
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
    { data: [], label: 'Quantidade de clientes' }
  ];
}
