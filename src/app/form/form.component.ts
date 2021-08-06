import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  success: boolean = false;
  cliente: Clientes;

  faSave=faSave;

  constructor(
    private service: ClientesService,
  ) {
    this.cliente = new Clientes();
  }

  ngOnInit(): void {
  }

  save() {
    this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
  }
}

