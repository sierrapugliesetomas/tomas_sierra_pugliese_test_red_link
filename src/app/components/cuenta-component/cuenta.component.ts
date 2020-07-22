import { OnInit, Input, Component } from "@angular/core";
import { Cuenta } from "../cuenta";


@Component({
  selector: 'cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: [ './cuenta.component.css' ]
})
export class CuentaComponent implements OnInit  {
  @Input() cuenta : Cuenta;

  constructor(){}

  ngOnInit(){
  }
}
