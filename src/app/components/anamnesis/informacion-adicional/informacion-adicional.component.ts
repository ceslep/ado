import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Citas } from '../../../models/citas';
import { DatosPaciente } from '../../../models/datos-paciente';

@Component({
  selector: 'informacion-adicional',
  templateUrl: './informacion-adicional.component.html',
  styleUrls: ['./informacion-adicional.component.css']
})
export class InformacionAdicionalComponent implements OnInit {

  @Input() cita:Citas;
  @Input() datosPaciente:DatosPaciente;
  @Output() volver = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }


  propagarVolver(){

    this.volver.emit(0); 

  }
}
