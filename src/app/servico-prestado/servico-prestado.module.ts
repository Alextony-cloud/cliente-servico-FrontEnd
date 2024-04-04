import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { ServicoPrestadoCreateComponent } from './servico-prestado-create/servico-prestado-create.component';
import { FormsModule } from '@angular/forms';
import { ServicoPrestadoRoutingModule } from './servico-prestado.routing.module';



@NgModule({
  declarations: [
    ServicoPrestadoListComponent,
    ServicoPrestadoCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ServicoPrestadoRoutingModule
  ],
  exports: [
    ServicoPrestadoListComponent,
    ServicoPrestadoCreateComponent
  ]
})
export class ServicoPrestadoModule { }
