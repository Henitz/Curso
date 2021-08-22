import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { State } from '../state';
import { City } from '../city';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  selectedCountry: Country = new Country('Brasil');
  selectedState: State = new State('São Paulo', 'Brasil');
  countries!: Country[];
  states!: State[];
  cities!: City[];

  constructor(private selectService: SelectService) {}

  ngOnInit(): void {
    this.countries = this.selectService.getCountries();
  }

  onSelect(countryName: string) {
    this.states = this.selectService.getStates().filter((s) => s.CountryName == countryName)
  }

  onSelectState(stateName: string) {
    console.log("Estado selecionado: " + stateName);
    this.cities = this.selectService.getCities().filter((c) => {
      c.StateName == stateName;
      console.log("Lista de estado na posição: " + c.StateName)
    }
    )
  }
}
