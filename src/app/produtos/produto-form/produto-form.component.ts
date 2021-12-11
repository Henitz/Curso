import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Produtos } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  success: boolean = false;
  produtos: Produtos;
  faSave=faSave;
  faArrowCircleLeft=faArrowCircleLeft;

  codigo!: number;

  accountId = this.tokenStorage.getAccountID();


  constructor(
    private service: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenStorage: TokenStorageService,
  ) {
    this.produtos = new Produtos();
   }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.codigo = urlParams['codigo']
      if(this.codigo){
        this.service
              .getOne(this.codigo, this.accountId)
              .subscribe(
                response => this.produtos = response ,
                errorResponse => this.produtos = new Produtos()
              );
      }
    });
  }

  save() {

    // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
   // this.service.save(this.produtos, this.accountId).subscribe(c=>{this.router.navigate(['/produtos']); this.success = true})
    //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
    if(!this.codigo){
      console.log(" NAO TEM ID PORTANTO EH NOVO POSTMAPPING")
      this.service.save(this.produtos, this.accountId).subscribe(c=>{this.router.navigate(['/produtos']); this.success = true})
      }
     if(this.codigo){
      console.log("  TEM ID PORTANTO EH ALTERACAO PUTMAPPING")
       this.service.update(this.codigo, this.produtos,this.accountId).subscribe(c=>{this.router.navigate(['/produtos']); this.success = true})
      }




   }

}
