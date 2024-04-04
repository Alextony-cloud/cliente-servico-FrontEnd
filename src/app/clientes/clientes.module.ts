import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ClientesReadComponent } from './clientes-read/clientes-read.component';
import { ClientesUpdateComponent } from './clientes-update/clientes-update.component';
import { CPFPipe } from './cpf.pipe';



@NgModule({
  declarations: [
    ClientesFormComponent,
    ClientesReadComponent,
    ClientesUpdateComponent,
    CPFPipe
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    NgxMaskDirective,
    
  ],
  exports:[
    ClientesFormComponent,
    ClientesReadComponent,
    ClientesUpdateComponent
   
  ]
})
export class ClientesModule { }
