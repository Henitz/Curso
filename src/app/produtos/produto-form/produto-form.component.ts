import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
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


  constructor(
    private service: ProdutosService,
    private router: Router,
  ) {
    this.produtos = new Produtos();
   }

  ngOnInit(): void {
  }

  save() {
    // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
    this.service.save(this.produtos).subscribe(c=>{this.router.navigate(['/produtos']); this.success = true})
    //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
   }

}
