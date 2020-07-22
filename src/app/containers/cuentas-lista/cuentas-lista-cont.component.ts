import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cuenta } from '../../components/cuenta';
import { Observable, Subscription, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cuentas-lista-cont',
  templateUrl: './cuentas-lista-cont.component.html',
  styleUrls: ['./cuentas-lista-cont.component.css']
})
export class CuentasListaComponent implements OnInit, OnDestroy {

  cuentas : Cuenta[];
  url = 'https://apirest/getCuentas?tipo="string"&orden="string"';
  suscripcion : Subscription;
  
  mock = {"cuentas":[{"nroCuenta":1234, "tipo":"CA$"},{"nroCuenta":5678, "tipo":"CC$"},{"nroCuenta":9012, "tipo":"CAu$s"}]};
  
  formulario = this.fb.group({
  filtroControl: ['']});

  filtro = this.formulario.get('filtroControl');

  constructor(private http: HttpClient,private fb: FormBuilder){ }

  ngOnInit() {
    
    /*
    this.suscripcion = this.http.get(this.url).subscribe(data => {
      if(data){
        console.log(data);
        
      } else {
        console.log('data undefined');
      }
      }, (err) => {
        console.log(err);
      }
    ); */

  of<Cuenta[]>(this.mock.cuentas).pipe(map(data => data as unknown as Cuenta[]))
    .subscribe(cuentasData => {
    this.cuentas = cuentasData;
    });
  this.filtro.valueChanges.subscribe();
  //this.cuentas = null;

    }

  ascendente(){
   return this.cuentas.sort((a,b) => a.nroCuenta < b.nroCuenta?  1 : -1); 
  }
  descendente(){
    this.ascendente().reverse();
  }
  
  ngOnDestroy(){
    //this.suscripcion.unsubscribe();

  }

  limpiar(){
    this.filtro.setValue('');
  }
 
  
}