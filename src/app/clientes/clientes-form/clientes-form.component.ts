import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../../clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {

  cliente: Cliente ={
    id: '',
    nome: '',
    cpf: '',
    dataCadastro: ''
  }

  success:boolean = false;
  errors:String[] = [];

  constructor(private service: ClienteService, private router: Router){}

  onSubmit(){
    this.service.create(this.cliente).subscribe((r)=>{
      this.cliente = r;
      this.success = true;
      this.errors = null!;
      this.router.navigate(["/clientes/read"])
    },e => {
      this.success = false;
      this.errors = e.error.errors;
    })
  }

  voltar(){
    this.router.navigate(["/clientes/read"])
  }
}
