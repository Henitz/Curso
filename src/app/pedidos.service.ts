import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedidos } from './pedidos';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {


  private basePedidoUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


getAll(accountId: any): Observable<Pedidos[]> {
  return this.http.get<Pedidos[]>(this.basePedidoUrl + `/pedidos/${accountId}`)
}

update(codigo: number, Pedidos: Pedidos, accountId: any ) {
  return this.http.put(this.basePedidoUrl + `/pedidos/${codigo}` + `/${accountId}`, Pedidos)
}

save(Pedidos: Pedidos, accountId: any) {
console.log(" printer 1")
  return this.http.post<Pedidos>(this.basePedidoUrl + `/pedidos` +  `/${accountId}`, Pedidos)
}

getOne(codigo: number, accountId: any) {
  return this.http.get<Pedidos>(this.basePedidoUrl + `/pedidos/${codigo}` + `/${accountId}`)
}

delete(codigo: number, accountId: any) : Observable<any> {
  return this.http.delete<any>(this.basePedidoUrl + `/pedidos/${codigo}` + `/${accountId}`)
}

changeAtivoPedidos(codigo: number, accountId: any) : Observable<any> {
  return this.http.patch<any>(this.basePedidoUrl + `/pedidos/${codigo}` + "/ativo" + `/${accountId}`, null)
}
}






