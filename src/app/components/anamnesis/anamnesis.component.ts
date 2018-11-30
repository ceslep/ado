import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Citas } from '../../models/citas';
import { DatosPaciente } from '../../models/datos-paciente';
import { DatosPacienteService } from '../../services/datos-paciente.service';


@Component({
  selector: 'anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.css']
})
export class AnamnesisComponent implements OnInit {

  @Input() cita:Citas;
  @Output() volver=new EventEmitter<number>();
  datosPaciente:DatosPaciente;
  constructor(private service:DatosPacienteService) { }

  ngOnInit() {

   
  }

  ngOnChanges(){

    if(this.cita)
      this.datos_principales(this.cita.paciente);

  }

  public datos_principales(paciente:string){

      this.service.getPaciente(paciente).subscribe(data=>{
        
        this.datosPaciente=data[0];
        console.log(data);

      });
    
  }

  procesarVolver(event){

      this.volver.emit(event);

  }
}
