import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Country } from "./country";
import { State } from "./state";

@Injectable()
export class SelectService {
  countries: Country[] = [];
  states: State[] = [];

  urlCountries :string = "https://raw.githubusercontent.com/Henitz/Curso/develop/src/assets/Countries.json";
  urlStates :string = "https://raw.githubusercontent.com/Henitz/Curso/develop/src/assets/States.json";

  constructor(private http:HttpClient) { }

  allCountries(): Observable<any>{
    return this.http.get(this.urlCountries);
  }

  allStates(): Observable<any>{
    return this.http.get(this.urlStates);
  }

  getCountries(){
    this.allCountries().subscribe(c => {this.countries=c.Countries;})
    return this.countries;
  }

  getStates(){
    this.allStates().subscribe(c => {this.states=c.States;})
    return this.states;
  }
}
