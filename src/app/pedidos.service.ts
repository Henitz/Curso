import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedidos } from './pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  private basePedidoUrl = environment.baseUrl + "/pedidos";

  constructor(private http: HttpClient) { }


getAll(): Observable<Pedidos[]> {
  return this.http.get<Pedidos[]>(this.basePedidoUrl)
}

save(Pedidos: Pedidos) {
console.log(" printer 1")
  return this.http.post<Pedidos>(this.basePedidoUrl, Pedidos)
}

getOne(codigo: number) {
  return this.http.get<Pedidos>(this.basePedidoUrl + `/${codigo}`)
}

delete(codigo: number) : Observable<any> {
  return this.http.delete<any>(this.basePedidoUrl + `/${codigo}`)
}

changeAtivo(codigo: number) : Observable<any> {
  return this.http.patch<any>(this.basePedidoUrl + `/${codigo}` + "/ativo", null)
}
}






