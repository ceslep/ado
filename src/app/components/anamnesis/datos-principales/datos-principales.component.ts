import { Component, OnInit,Input,EventEmitter,Output,SimpleChanges } from '@angular/core';
import { Citas } from '../../../models/citas';
import { DatosPaciente } from '../../../models/datos-paciente';

@Component({
  selector: 'datos-principales',
  templateUrl: './datos-principales.component.html',
  styleUrls: ['./datos-principales.component.css']
})
export class DatosPrincipalesComponent implements OnInit {

  @Input() cita:Citas;
  @Input() datosPaciente:DatosPaciente;
  @Output() volver = new EventEmitter<number>();
  constructor() {

      
  
      
   }

  ngOnInit() {
     
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
  }
  propagarVolver(){

    this.volver.emit(0); 

  }

}
