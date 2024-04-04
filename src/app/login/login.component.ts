import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login!: string;
  password!: string;
  errors: String[] | null = null;
  mensagemSucesso!: string| null;
  isCadastrar!: boolean
  constructor(private router: Router, private authService: AuthService){}

  onSubmit(){
    this.authService.login(this.login, this.password).subscribe({
      next: (response) => {
      this.router.navigate(['/home']);
    },
    error: (errorResponse) => {
      this.errors = errorResponse.error.errors;
      this.mensagemSucesso = null;
  }
  });
  }

  preparaCadastrar(event: any){
    event.preventDefault();
    this.isCadastrar = true;
  }

  cancelaCadastro(){
    this.isCadastrar = false;
  }

  cadastrar(){
    const usuario = new Usuario();
    usuario.login = this.login;
    usuario.password = this.password;
    this.authService.save(usuario).subscribe({next: (response) => {
       this.mensagemSucesso = "Cadastro realizado com sucesso! Efetue o login.";
       this.isCadastrar = false
       this.login = '';
       this.password = '';
       this.errors = null
    },
    error: (errorResponse) => {
      this.errors = errorResponse.error.errors;
      this.mensagemSucesso = null;
  }
  });
  }
}
