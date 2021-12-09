import { ProdutosService } from 'src/app/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Produtos } from 'src/app/produtos';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
@Component({
  selector: 'app-produto-one',
  templateUrl: './produto-one.component.html',
  styleUrls: ['./produto-one.component.css']
})
export class ProdutoOneComponent implements OnInit {


  codigo!: number;
  produto: Produtos = new Produtos();
  faArrowCircleLeft=faArrowCircleLeft;

  accountId = this.tokenStorage.getAccountID();


  constructor(
    private service:ProdutosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) {
    this.codigo = this.activatedRoute.snapshot.params['codigo'];
  }

  ngOnInit(): void {
    this.getOne(this.codigo)
  }

  getOne(codigo: number){
    this.service.getOne(codigo, this.accountId).subscribe(c=>this.produto=c)
  }

  back() {
    this.router.navigate(['/produtos'])
  }



}
