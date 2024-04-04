import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClientesReadComponent } from './clientes-read/clientes-read.component';
import { ClientesUpdateComponent } from './clientes-update/clientes-update.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  {path: 'clientes', component:LayoutComponent,canActivate: [AuthGuard], children:[
    {path: 'form', component:ClientesFormComponent},
    {path: 'read', component:ClientesReadComponent},
    {path: 'read/clientes-update/:id', component:ClientesUpdateComponent},
    {path: '', redirectTo: '/clientes/read', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
