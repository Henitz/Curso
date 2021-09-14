import { Produtos } from './produtos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private baseProdutoUrl = environment.baseUrl + "/produtos";

  constructor(private http: HttpClient) { }



  getAll(): Observable<Produtos[]> {
    return this.http.get<Produtos[]>(this.baseProdutoUrl)
  }

  save(Produtos: Produtos) {
    return this.http.post<Produtos>(this.baseProdutoUrl, Produtos)
  }

  getOne(codigo: number) {
    return this.http.get<Produtos>(this.baseProdutoUrl + `/${codigo}`)
  }

  delete(codigo: number) : Observable<any> {
    return this.http.delete<any>(this.baseProdutoUrl + `/${codigo}`)
  }

  changeAtivo(codigo: number) : Observable<any> {
    return this.http.patch<any>(this.baseProdutoUrl + `/${codigo}` + "/ativo", null)
  }
}

function getAll() {
  throw new Error('Function not implemented.');
}
