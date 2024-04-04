import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from 'src/app/clientes.service';
import { error } from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit{

  clientes: Cliente[] = []
  clienteSelecionado: Cliente | undefined;

  mensagemSucesso: string = '' ;
  mensagemErro: string = '' ;

  constructor(private service: ClienteService, private router: Router){}
  
  ngOnInit(): void {

    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe({
      next: (response) => {
        this.clientes = response
    },
    error: (error) => {
      alert('Erro ao carregar os clientes. Por favor, tente mais tarde!')
    }
  });
  }

  createCliente(){
    this.router.navigate(["/clientes/form"])
  }

  preparaDelecao(cliente: Cliente){
    this.clienteSelecionado = cliente
  }

  delete(){
    this.service.delete(this.clienteSelecionado!).subscribe((r) => {
      this.mensagemSucesso = 'Cliente deletado com sucesso'
      this.ngOnInit();
    }, e => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.')
  }

}
