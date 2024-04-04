import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { ClientesModule } from './clientes/clientes.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ClienteService } from './clientes.service';
import { NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask } from 'ngx-mask';
import { ServicoPrestadoModule } from './servico-prestado/servico-prestado.module';
import { ServicoPrestadoService } from './servico-prestado.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';
import { TokenInterceptor } from './token.interceptor';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientesModule,
    ServicoPrestadoModule,
    NgxMaskDirective,
    FormsModule,
    NgxMaskPipe
  ],
  providers: [ClienteService, ServicoPrestadoService, AuthService, provideEnvironmentNgxMask(),
  {provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
