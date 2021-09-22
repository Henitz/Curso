import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Pedidos } from 'src/app/pedidos';
import { PedidosService } from 'src/app/pedidos.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  success: boolean = false;
  pedidos: Pedidos;
  faSave=faSave;
  faArrowCircleLeft=faArrowCircleLeft;

  codigo!: number;


  constructor(
  private service: PedidosService,
  private router: Router,
  private activatedRoute: ActivatedRoute

  ) {
    this.pedidos = new Pedidos();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.codigo = urlParams['codigo']
      if(this.codigo){
        this.service
              .getOne(this.codigo)
              .subscribe(
                response => this.pedidos = response ,
                errorResponse => this.pedidos = new Pedidos()
              )
      }
    })





  }

  save() {
    // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
    console.log("Salvar");
    this.service.save(this.pedidos).subscribe(c=>{this.router.navigate(['/pedidos']); this.success = true})
    //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
   }

}
