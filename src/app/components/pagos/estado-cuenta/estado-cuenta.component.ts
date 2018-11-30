import { Component, OnInit,Input,SimpleChanges } from '@angular/core';
import { Citas } from '../../../models/citas';

@Component({
  selector: 'estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.css']
})
export class EstadoCuentaComponent implements OnInit {

  @Input() cita:Citas;
  constructor() { }

  ngOnInit() {

   
  }


  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
    console.log(changes.cita.currentValue);
  }
}
