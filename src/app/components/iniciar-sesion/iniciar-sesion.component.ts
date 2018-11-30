import { Component, OnInit } from '@angular/core';
import { AgendasService } from '../../services/agendas.service';
import { Agendas } from '../../models/agendas';

@Component({
  selector: 'iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  agendas:Agendas[];
  constructor(private service:AgendasService) { }

  ngOnInit() {

      this.ver_agendas();
    
  }

  ver_agendas(){

      this.service.getAgendas().subscribe((data)=>{

        console.log(data);
        this.agendas=data;

      });
  }

}
