import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/cliente';
import { ServicoPrestado } from '../servico-prestado';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico-prestado-create',
  templateUrl: './servico-prestado-create.component.html',
  styleUrls: ['./servico-prestado-create.component.css']
})
export class ServicoPrestadoCreateComponent implements OnInit{

  clientes: Cliente[] = [];
  servico: ServicoPrestado = {
    idCliente: '',
    descricao: '',
    preco: '',
    data: ''
  }
  success:boolean = false;
  errors:String[] = [];
  constructor(private clienteService: ClienteService, private service: ServicoPrestadoService, private router: Router){}
  
  ngOnInit(): void {
    this.clienteService.findAll().subscribe({ next: (response) => {
      this.clientes = response
      
    },
    error: (error) => {
      alert('Erro ao carregar os clientes. Por favor, tente mais tarde!')
    }
   });
  }

  onSubmit(){
      this.service.salvar(this.servico).subscribe({next: (response) => {
        this.servico = response
         this.success = true;
         this.errors = null!;
         this.router.navigate(['/servico-prestado/list'])
      },
      error: (error) => {
        this.errors = ['Erro ao salvar o serviço']  
    }
    });
  }
}