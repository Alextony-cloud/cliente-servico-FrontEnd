import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicoPrestadoCreateComponent } from './servico-prestado-create/servico-prestado-create.component';
import { ServicoPrestadoListComponent } from './servico-prestado-list/servico-prestado-list.component';
import { LayoutComponent } from '../layout/layout.component';
import { AuthGuard } from '../auth-guard.service';


const routes: Routes = [
  {path:'servico-prestados', component:LayoutComponent,canActivate: [AuthGuard],children: [
    {path:'create', component:ServicoPrestadoCreateComponent},
    {path:'list', component:ServicoPrestadoListComponent},
    {path:'', redirectTo: '/servico-prestados/list', pathMatch: 'full'}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
