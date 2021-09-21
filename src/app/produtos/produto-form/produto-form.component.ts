import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Clientes } from 'src/app/clientes';
import { Produtos } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

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


  constructor(
    private service: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.produtos = new Produtos();
   }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.codigo = urlParams['codigo']
      if(this.codigo){
        this.service
              .getOne(this.codigo)
              .subscribe(
                response => this.produtos = response ,
                errorResponse => this.produtos = new Produtos()
              )
      }
    })





  }

  save() {
    // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
    this.service.save(this.produtos).subscribe(c=>{this.router.navigate(['/produtos']); this.success = true})
    //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
   }

}
