import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  id!: number;
  cliente: Clientes = new Clientes();
  faArrowCircleLeft=faArrowCircleLeft;

  accountId = this.tokenStorage.getAccountID();


  constructor(
    private service: ClientesService,
    private activadedRoute: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService,
  ) {
    this.id = this.activadedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.getOne(this.id)
  }
  getOne(id: number){
    this.service.getOne(id, this.accountId).subscribe(c=>this.cliente=c)
  }

  back() {
    this.router.navigate(['/clientes'])
  }




}
