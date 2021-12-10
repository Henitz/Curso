import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clientes } from './clientes';
import { Mensagem } from './mensagem';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseClienteUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAll(accountId: any): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.baseClienteUrl + `/clientes/${accountId}`)
  }

  save(Clientes: Clientes, accountId: any) {
    return this.http.post<Clientes>(this.baseClienteUrl + `/clientes` +  `/${accountId}`, Clientes)
  }

  getOne(id: number, accountId: any) {
    return this.http.get<Clientes>(this.baseClienteUrl + `/clientes/${id}` + `/${accountId}`)
  }

  delete(id: number, accountId: any) : Observable<Mensagem> {
    return this.http.delete<any>(this.baseClienteUrl + `/clientes/${id}` + `/${accountId}`)
  }

  changeAtivo(id: number, accountId: any) : Observable<any> {
    return this.http.patch<any>(this.baseClienteUrl + `/clientes/${id}` + "/ativo" +  `/${accountId}`, null)
  }

  /* update(id: (id: number, accountId: any ) {
    return this.http.put(this.baseClienteUrl + `/clientes/${id}` + `/${accountId}`, Clientes)
  } */

}
