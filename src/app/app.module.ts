import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CuentaComponent } from './components/cuenta-component/cuenta.component';
import { CuentasListaComponent } from './containers/cuentas-lista/cuentas-lista-cont.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, CuentaComponent, CuentasListaComponent, FilterPipe],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
