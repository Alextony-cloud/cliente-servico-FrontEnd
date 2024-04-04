import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './clientes/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: String = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }
  
  create(cliente: Cliente):Observable<Cliente>{
   const url = `${this.baseUrl}/clientes`;
   return this.http.post<Cliente>(url, cliente);
  }

  update(cliente: Cliente):Observable<Cliente>{
    const url = `${this.baseUrl}/clientes/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente);
  }

  delete(cliente: Cliente):Observable<void>{
    const url = `${this.baseUrl}/clientes/${cliente.id}`;
    return this.http.delete<void>(url);
  }

  findAll():Observable<Cliente[]>{
    const url = `${this.baseUrl}/clientes`;
    return this.http.get<Cliente[]>(url);
  }

  findById(id: String):Observable<Cliente>{
    const url = `${this.baseUrl}/clientes/${id}`
    return this.http.get<Cliente>(url);
  }

}


