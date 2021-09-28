import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  faPlusSquare=faPlusSquare;
  faEye = faEye;
  faTrash = faTrash;
  faPencilAlt = faPencilAlt;

  clienteSelecionadoExibir = new Clientes();
  clienteSelecionadoDelete = new Clientes();
  clienteSelecionadoAtivar = new Clientes();
  clientes: Clientes[] = [];
  blockDeletion: Boolean = false;

  constructor(
    private service: ClientesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(c=>this.clientes=c)
  }

  form() {
    this.router.navigate(['/clientes/form'])
  }

  one(id: number) {
    this.router.navigate(['/clientes/' + id])
  }

  preparaDelete(cliente: Clientes){
    this.clienteSelecionadoDelete = cliente;
  }

  delete() {
    this.service.delete(this.clienteSelecionadoDelete.id).subscribe(
          m=> { this.blockDeletion = m.block_delecao;
          this.ngOnInit()
        }
      )
  }

  alterar(id: number) {
    this.router.navigate(['/clientes/form/' + id])
  }


  prepararExibir(cliente: Clientes){
    this.clienteSelecionadoExibir = cliente
  }

  exibir() {
    this.router.navigate(['/clientes/' + this.clienteSelecionadoExibir.id ])
  }

  prepararMudarStatus(cliente: Clientes) {
    this.clienteSelecionadoAtivar = cliente
  }

  mudarStatus() {
    this.service.changeAtivo(this.clienteSelecionadoAtivar.id).subscribe(data=>this.ngOnInit())
  }

}

