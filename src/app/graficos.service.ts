import { Produtos } from './produtos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Graficos } from './graficos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficosService {

  private baseGraficosUrl = environment.baseUrl + "/graficos/totais";

  constructor(private http: HttpClient) { }



  getTotais(): Observable<Graficos[]> {
    return this.http.get<Graficos[]>(this.baseGraficosUrl)
  }
}

