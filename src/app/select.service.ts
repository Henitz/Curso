import { Injectable } from "@angular/core";
import { Country } from "./country";
import { State } from "./state";
import { City } from "./city";

@Injectable()
export class SelectService {
  countries: Country[] = [];
  states: State[] = [];
  cities: City[] = [];

  constructor() { }

  getCountries() {
    return [
     new Country('United States'),
     new Country('Brasil'),
    ];
  }

  getStates() {
   return [
     new State('United States', 'Arizona' ),
     new State('United States', 'Alaska' ),
     new State('United States', 'Florida'),
     new State('United States', 'New York'),
     new State('Brasil', 'São Paulo' ),
     new State('Brasil', 'Rio de Janeiro'),
     new State('Brasil', 'Minas Gerais' )
    ];
  }

  getCities() {
    return [
      new City('United States', 'New York', 'New York'),
      new City('Brasil', 'São Paulo', 'São Paulo' ),
     ];
   }
}
