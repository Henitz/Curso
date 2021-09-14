import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';
import { faEye, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router'

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  produtos: Produtos[] = [];
  faEye = faEye;
  produto: Produtos[] = [];
  produtoSelecionadoExibir = new Produtos();
  faPlusSquare=faPlusSquare;


  constructor(
    private service: ProdutosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(p=>this.produtos=p)
  }
  prepararExibir(produto: Produtos){
    this.produtoSelecionadoExibir = produto;
  }

  form() {
    this.router.navigate(['/produtos/produto-form'])
  }
}
