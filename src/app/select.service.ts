import { Injectable } from "@angular/core";
import { Country } from "./country";
import { State } from "./state";

@Injectable()
export class SelectService {
  getCountries(){
    return [
      new Country(1,'USA'),
      new Country(2,'Brasil')
    ];
  }
  getStates(){
    return [
      new State(1,1, 'New Mexico'),
      new State(1,1, 'New York'),
      new State(1,2, 'São Paulo'),
      new State(1,2, 'Rio de Janeiro')
    ];
  }
}
