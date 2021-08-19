import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { State } from '../state';
import { SelectService } from '../select.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  selectedCountry: Country = new Country('Brasil');
  countries!: Country[];
  states!: State[];

  constructor(private selectService: SelectService) {}

  ngOnInit(): void {
    this.countries = this.selectService.getCountries();
  }

  onSelect(countryName: string) {
    this.states = this.selectService.getStates().filter((s) => s.CountryName == countryName)
  }
}
