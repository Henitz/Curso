import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router'

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
    private router: Router
  ) {
    this.cliente = new Clientes();
  }

  ngOnInit(): void {
  }

  save() {
   // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
   this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes']); this.success = true})
   //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
  }
}

