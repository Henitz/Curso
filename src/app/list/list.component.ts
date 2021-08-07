import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  faPlusSquare=faPlusSquare;
  faEye = faEye;

  clientes: Clientes[] = [];

  constructor(
  private service: ClientesService,
  private router: Router

  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(c=>this.clientes=c)
  }

  form() {
    this.router.navigate(['/clientes/form'])
  }

  one(id: number) {
    this.router.navigate(['/clientes/' + id])
  }

}
