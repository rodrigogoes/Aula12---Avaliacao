import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './services/cliente.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorProvider } from './services/interceptor-error.service';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaService } from './services/consulta.service';


@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaComponent,
    CadastroClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ErrorInterceptorProvider, ConsultaService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }