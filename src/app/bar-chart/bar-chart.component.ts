import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  clientes: Clientes[] = [];

  constructor(private service: ClientesService) {
  }

  ngOnInit(): void {
      this.service.getAll().subscribe(
      data =>{
        this.barChartData[0].data = data.map(c=> parseInt((c.quantidadeFuncionarios).toString()))
        this.barChartLabels = data.map(c => c.nome)
      })
  }

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
  };
  barChartColors: Color[] = [
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

  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [], label: 'Quantidade de clientes' }
  ];
}
