import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './login/Usuario';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from './types/login-response.type';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: String = 'http://localhost:8080/auth';

  jwtHelper: JwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient) { }

  save(usuario:Usuario):Observable<any>{
    const url = `${this.baseUrl}/register`;
    return this.http.post<Usuario>(url, usuario);
  }

  login(login: string, password: string){
    const url = `${this.baseUrl}/login`;
    return this.http.post<LoginResponse>(url,{login, password}).pipe(
      tap((value) => {
        localStorage.setItem("auth-token", value.token)     
        localStorage.setItem("username", value.name)  
      })
    )
  }

  closeSession(){
    localStorage.removeItem("auth-token")
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if(token){
      const usuario = localStorage.getItem('username')
      return usuario;
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = this.obterToken();
    if(token){
      const expirated = this.jwtHelper.isTokenExpired(token);
      return !expirated
    }
    return false;
  }

  obterToken(){
    const token = localStorage.getItem('auth-token')
    if(token){
      return token
    }
    return null;
  }
  
}
