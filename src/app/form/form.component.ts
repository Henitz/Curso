import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';

import { ActivatedRoute, Params, Router } from '@angular/router'


import { faSave, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { TokenStorageService } from '../_services/token-storage.service';
//parte 2

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  success: boolean = false;
  cliente: Clientes;
  faSave=faSave;
  faArrowCircleLeft=faArrowCircleLeft;

  //parte 2
  id!: number;
  accountId = this.tokenStorage.getAccountID();


  constructor(
    private service: ClientesService,
    private router: Router,
    //parte 2
    private activatedRoute: ActivatedRoute,
    private tokenStorage: TokenStorageService
  ) {
    this.cliente = new Clientes();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id']
      if(this.id){
        this.service
              .getOne(this.id, this.accountId)
              .subscribe(
                response => this.cliente = response ,
                errorResponse => this.cliente = new Clientes()
              )
      }
    })


  }

  save() {
    console.log("Salvar Aqui")
   // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
  // this.service.save(this.cliente, this.accountId).subscribe(c=>{this.router.navigate(['/clientes']); this.success = true})
   if(!this.id){
    console.log(" NAO TEM ID PORTANTO EH NOVO POSTMAPPING")
    this.service.save(this.cliente, this.accountId).subscribe(c=>{this.router.navigate(['/clientes']); this.success = true})
  }
  if(this.id){
    console.log("  TEM ID PORTANTO EH ALTERACAO PUTMAPPING")
    /* this.service.update(this.id, this.cliente,this.accountId).subscribe(c=>{this.router.navigate(['/clientes']); this.success = true}) */
  }





   //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
  }
}

