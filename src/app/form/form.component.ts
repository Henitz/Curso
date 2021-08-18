import { Component, OnInit } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { Clientes } from '../clientes';
import { ClientesService } from '../clientes.service';
import { Router } from '@angular/router'
import { Country } from '../country';
import { State } from '../state';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  success: boolean = false;
  cliente: Clientes;
  faSave=faSave;

  selectedCountry: Country = new Country(2, 'Brasil');
  countries!: Country[];
  states!: State[];

  constructor(
    private service: ClientesService,
    private router: Router,
    private selectService: SelectService
  ) {
    this.cliente = new Clientes();
  }

  ngOnInit(): void {
    this.countries = this.selectService.getCountries();
    this.onSelect(this.selectedCountry.id);
  }

  onSelect(countryId: any) {
    this.states = this.selectService.getStates().filter((item) => item.countryId == countryId)
  }

  save() {
   // this.service.save(this.cliente).subscribe(c=>{this.cliente=c; this.success = true})
   this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes']); this.success = true})
   //this.service.save(this.cliente).subscribe(c=>{this.router.navigate(['/clientes'])})
  }
}

