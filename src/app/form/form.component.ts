import { Component, OnInit } from '@angular/core';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';

import { ActivatedRoute, Params, Router } from '@angular/router'
import { Country } from '../country';
import { State } from '../state';
import { SelectService } from '../select.service';



import { faSave, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

//parte 2



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  success: boolean = false;
  cliente: Clientes;
  faSave=faSave;
  faArrowCircleLeft=faArrowCircleLeft;

    //parte 2
    id!: number;

  selectedCountry: Country = new Country(2, 'Brasil');
  countries!: Country[];
  states!: State[];

  constructor(
    private service: ClientesService,
    private router: Router,
    private selectService: SelectService,

    //parte 2
    private activatedRoute: ActivatedRoute


  ) {
    this.cliente = new Clientes();
  }

  ngOnInit(): void {

    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryId: any) {
    this.states = this.selectService.getStates().filter((item) => item.countryId == countryId)


    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id']
      if(this.id){
        this.service
              .getOne(this.id)
              .subscribe(
                response => this.cliente = response ,
                errorResponse => this.cliente = new Clientes()
              )
      }
    })


  }

  save() {
   // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
   this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes']); this.success = true})
   //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
  }
}

