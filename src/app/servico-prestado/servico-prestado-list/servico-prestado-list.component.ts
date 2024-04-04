import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { servicoPrestadoBusca } from './servicoPrestadoBusca';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-list',
  templateUrl: './servico-prestado-list.component.html',
  styleUrls: ['./servico-prestado-list.component.css']
})
export class ServicoPrestadoListComponent implements OnInit{
 
  nome!: string;
  mes!: number;
  meses!: number[];
  lista: servicoPrestadoBusca[] = [];
  message!: string;

  constructor(private service: ServicoPrestadoService){
    this.meses =[1,2,3,4,5,6,7,8,9,10,11,12];
  }
  
  ngOnInit(): void {
   
  }

  consultar(){
    this.service.buscar(this.nome, this.mes).subscribe({next: (response) => {
      this.lista = response;
      if(this.lista.length <= 0){
        this.message = "Nenhum Registro Encontrado"
      }else {
        this.message = "";
      }
       
    },
    error: (error) => {
      error = error
  }
  });
  }

}
