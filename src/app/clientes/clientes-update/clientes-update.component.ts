import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from 'src/app/clientes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit{

  cliente: Cliente ={
    id: '',
    nome: '',
    cpf: '',
    dataCadastro: ''
  }
    idT: number = 0;
  success: boolean = false;
  errors: boolean = null!;

  constructor(private service: ClienteService, private activatedRoute: ActivatedRoute, private router: Router){ }
  
  ngOnInit(): void {
    this.cliente.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void{
    this.service.findById(this.cliente.id!).subscribe((r) =>{
      this.cliente = r 
    })
  }

  onSubmit(){
    this.service.update(this.cliente).subscribe((r)=>{
      this.cliente = r;
      this.success = true;
      this.errors = null!;
      this.router.navigate(["/clientes-read"])
    },e => {
      this.success = false;
      this.errors = e.error.errors;
    })
  }

  voltar(){
    this.router.navigate(["/clientes-read"])
  }
}
