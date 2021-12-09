import { Produtos } from './produtos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private baseProdutoUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }



  getAll(accountId: any): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.baseProdutoUrl +  `/produtos/${accountId}`)
  }

  save(Produtos: Produtos, accountId: any) {
    return this.http.post<Produtos>(this.baseProdutoUrl + `/produtos` +  `/${accountId}`, Produtos)
  }

  getOne(codigo: number, accountId: any) {
    return this.http.get<Produtos>(this.baseProdutoUrl + `/produtos/${codigo}` + `/${accountId}`)
  }

  delete(codigo: number, accountId: any) : Observable<any> {
    return this.http.delete<any>(this.baseProdutoUrl + `/produtos/${codigo}` + `/${accountId}`)
  }


  changeAtivoProduto(codigo: number, accountId: any) : Observable<any> {
    return this.http.patch<any>(this.baseProdutoUrl + `/produtos/${codigo}` + "/ativo" + `/${accountId}`, null)
  }
}

function getAll() {
  throw new Error('Function not implemented.');
}
