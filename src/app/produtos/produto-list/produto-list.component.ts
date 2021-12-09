import { ProdutoOneComponent } from './../produto-one/produto-one.component';
import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';
import {
  faEye,
  faPlusSquare,
  faTrash,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css'],
})
export class ProdutoListComponent implements OnInit {
  produtoSelecionadoExibir = new Produtos();
  produtoSelecionadoDelete = new Produtos();
  produtoSelecionadoAtivar = new Produtos();

  produtos: Produtos[] = [];

  faPlusSquare = faPlusSquare;
  faEye = faEye;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  accountId = this.tokenStorage.getAccountID();

  constructor(private service: ProdutosService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    ) {}

  ngOnInit(): void {
    this.service.getAll(this.accountId).subscribe((p) => (this.produtos = p));
  }
  prepararExibir(produto: Produtos) {
    this.produtoSelecionadoExibir = produto;
  }

  exibirProduto() {
    this.router.navigate(['/produtos/' + this.produtoSelecionadoExibir.codigo]);
  }

  form() {
    this.router.navigate(['/produtos/produto-form']);
  }

  one(codigo: number) {
    this.router.navigate(['/produtos/' + codigo]);
  }

  preparaDeleteProduto(produto: Produtos) {
    this.produtoSelecionadoDelete = produto;
  }

  delete() {
    this.service
      .delete(this.produtoSelecionadoDelete.codigo, this.accountId)
      .subscribe((data) => this.ngOnInit());
  }

  alterarProduto(codigo: number) {
    console.log(codigo);
    console.log('Teste editar');
    this.router.navigate(['/produtos/produto-form/' + codigo]);
  }

  prepararMudarStatus(produto: Produtos) {
    this.produtoSelecionadoAtivar = produto;
  }

  mudarStatus() {
    this.service
      .changeAtivoProduto(this.produtoSelecionadoAtivar.codigo, this.accountId)
      .subscribe((data) => this.ngOnInit());
  }
}
