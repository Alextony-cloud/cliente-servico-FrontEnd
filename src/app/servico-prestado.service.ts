import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServicoPrestado } from './servico-prestado/servico-prestado';
import { Observable } from 'rxjs';
import { servicoPrestadoBusca } from './servico-prestado/servico-prestado-list/servicoPrestadoBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicoPrestadoService {

  baseUrl: String = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  salvar(servicoPrestado: ServicoPrestado):Observable<ServicoPrestado>{
    const url = `${this.baseUrl}/servicos-prestados`;
    return this.http.post<ServicoPrestado>(url, servicoPrestado);
  }

  buscar(nome:string, mes:number):Observable<servicoPrestadoBusca[]>{
    const httpParams = new HttpParams().set("nome", nome).set("mes", mes ? mes.toString() : '');
    const url = `${this.baseUrl}/servicos-prestados` + '?' + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }
}
