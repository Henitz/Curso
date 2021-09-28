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

  private baseClienteUrl = environment.baseUrl + "/clientes";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Clientes[]> {
    return this.http.get<Clientes[]>(this.baseClienteUrl)
  }

  save(Clientes: Clientes) {
    return this.http.post<Clientes>(this.baseClienteUrl, Clientes)
  }

  getOne(id: number) {
    return this.http.get<Clientes>(this.baseClienteUrl + `/${id}`)
  }

  delete(id: number) : Observable<Mensagem> {
    return this.http.delete<any>(this.baseClienteUrl + `/${id}`)
  }

  changeAtivo(id: number) : Observable<any> {
    return this.http.patch<any>(this.baseClienteUrl + `/${id}` + "/ativo", null)
  }


}
