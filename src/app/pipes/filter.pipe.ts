import { Pipe, PipeTransform } from '@angular/core';
import { Cuenta } from '../components/cuenta';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cuentas: Cuenta[], filtro?: string): any {
      if (!cuentas) return [];
      if (!filtro || filtro.length == 0) return cuentas;      
      return cuentas.filter(a => a.nroCuenta.toString().includes(filtro)|| a.tipo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase()));
  }

}