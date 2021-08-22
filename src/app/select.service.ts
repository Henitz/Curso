import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "./country";
import { State } from "./state";
import { City } from "./city";

@Injectable()
export class SelectService {
  countries: Country[] = [];
  states: State[] = [];
  cities: City[] = [];

  urlCountries :string = "https://raw.githubusercontent.com/Henitz/Curso/develop/src/assets/Countries.json";
  urlStates :string = "https://raw.githubusercontent.com/Henitz/Curso/develop/src/assets/States.json";
  urlCities : string = "https://raw.githubusercontent.com/Henitz/Curso/develop/src/assets/Cities.json"

  constructor(private http:HttpClient) { }

  allCountries(): Observable<any>{
    return this.http.get(this.urlCountries);
  }

  allStates(): Observable<any>{
    console.log("######SERVICE ESTADOS#########" + this.http.get(this.urlStates));
    return this.http.get(this.urlStates);
  }

  allCities(): Observable<any>{
    console.log("######SERVICE CIDADES#########" + this.http.get(this.urlCities));
    return this.http.get(this.urlCities);
  }

  getCountries(){
    this.allCountries().subscribe(c => {this.countries=c.Countries;})
    return this.countries;
  }

  getStates(){
    this.allStates().subscribe(c => {this.states=c.States;})
    console.log("Tenho os estados? " + this.states)
    return this.states;
  }

  getCities(){
    this.allCities().subscribe(c => {this.cities=c.Cities;})
    console.log("Tenho as cidades? " + this.cities)
    return this.cities;
  }
}
