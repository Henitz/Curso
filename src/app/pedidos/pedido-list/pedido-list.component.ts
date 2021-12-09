import { PedidosService } from '../../pedidos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faPencilAlt, faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Pedidos } from 'src/app/pedidos';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-pedido-list',
  templateUrl: './pedido-list.component.html',
  styleUrls: ['./pedido-list.component.css']
})
export class PedidoListComponent implements OnInit {


  pedidos: Pedidos[] = [];
  pedidoSelecionadoExibir = new Pedidos();
  pedidoSelecionadoDelete = new Pedidos();
  pedidoSelecionadoAtivar = new Pedidos();

  faPlusSquare=faPlusSquare;
  faEye = faEye;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  accountId = this.tokenStorage.getAccountID();

  constructor(

    private service: PedidosService,
    private router: Router,
    private tokenStorage: TokenStorageService,


  ) { }

  ngOnInit(): void {
    this.service.getAll(this.accountId).subscribe(p=>this.pedidos=p)
  }

  prepararExibir(pedidos: Pedidos){
    this.pedidoSelecionadoExibir = pedidos;
  }

  exibirPedido() {
    this.router.navigate(['/pedidos/' + this.pedidoSelecionadoExibir.codigo ])
  }


  form() {
    this.router.navigate(['/pedidos/pedido-form'])
  }

  one(codigo: number) {
    this.router.navigate(['/pedidos/' + codigo])
  }

  preparaDeletePedido(produto: Pedidos){
    this.pedidoSelecionadoDelete = produto;
  }

  delete() {
    this.service.delete(this.pedidoSelecionadoDelete.codigo, this.accountId).subscribe(data=>this.ngOnInit())
  }

  alterarPedido(codigo: number) {
    console.log(codigo);
    console.log("Teste editar")
    this.router.navigate(['/pedidos/pedido-form/' + codigo])
  }

  prepararMudarStatus(pedido: Pedidos) {
    this.pedidoSelecionadoAtivar = pedido
  }

  mudarStatus() {
    this.service.changeAtivoPedidos(this.pedidoSelecionadoAtivar.codigo, this.accountId).subscribe(data=>this.ngOnInit())

  }

}
