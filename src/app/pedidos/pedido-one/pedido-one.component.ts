import { PedidosService } from 'src/app/pedidos.service';
import { Component, OnInit } from '@angular/core';
import { Pedidos } from 'src/app/pedidos';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-pedido-one',
  templateUrl: './pedido-one.component.html',
  styleUrls: ['./pedido-one.component.css']
})
export class PedidoOneComponent implements OnInit {

  codigo!: number;
  pedido: Pedidos = new Pedidos();
  faArrowCircleLeft=faArrowCircleLeft;

  accountId = this.tokenStorage.getAccountID();

  constructor(
    private service:PedidosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) {
    this.codigo = this.activatedRoute.snapshot.params['codigo'];
  }

  ngOnInit(): void {
    this.getOne(this.codigo, this.accountId)
  }

  getOne(codigo: number, accountId: any){
    this.service.getOne(codigo,this.accountId).subscribe(c=>this.pedido=c)
  }

  back() {
    this.router.navigate(['/pedidos'])
  }







}
