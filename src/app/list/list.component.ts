import { Component, OnInit } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router'
import { TokenStorageService } from '../_services/token-storage.service';

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

  accountId = this.tokenStorage.getAccountID();

  constructor(
    private service: ClientesService,
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.service.getAll(this.accountId).subscribe(c=>this.clientes=c)
  }

  close(){
    this.blockDeletion = false;
  }

  form() {
    this.router.navigate(['/clientes/form'])
  }

  one(id: number, accountId: any) {
    this.router.navigate(['/clientes/' + id])
  }

  preparaDelete(cliente: Clientes){
    this.clienteSelecionadoDelete = cliente;
  }

  delete() {
    this.service.delete(this.clienteSelecionadoDelete.id, this.accountId).subscribe(
          m=> { this.blockDeletion = m.block_delecao;
          this.ngOnInit()
        }
      )
  }

  alterar(id: number, accountId: any) {
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
    this.service.changeAtivo(this.clienteSelecionadoAtivar.id, this.accountId).subscribe(data=>this.ngOnInit())
  }

}

