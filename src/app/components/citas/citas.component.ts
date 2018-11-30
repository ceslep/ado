import { Component, OnInit,Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CitasService } from '../../services/citas.service';
import { Citas } from '../../models/citas';
import { Nombres } from '../../models/nombres';
import { MatTabChangeEvent } from '@angular/material';
import { AgendasService } from '../../services/agendas.service';
import { Agendas } from '../../models/agendas';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AnamnesisComponent } from '../../components/anamnesis/anamnesis.component';
import { of } from 'rxjs';






declare var $: any;

export interface DialogData {
  title: string;
  name: string;
}

@Component({
  selector: 'citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  hay_citas:boolean;
  citas:Citas[];
  cita:Citas;
  nombres:Nombres[];
  agendas:Agendas[];
  tabSelectedIndex=0;
  agenda:string;
  fecha:string;
  paciente:string;
  error: HttpErrorResponse;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  imagensrc:string="";
  imagensize:string="";
  imagenwidth:string="";
  datos:DialogData;
  
  constructor(private service:CitasService,private service_agendas:AgendasService,public dialog: MatDialog,private anamnesis:AnamnesisComponent) { 

    this.citas=[];
    this.agenda="ORTODONCIA";
    this.hay_citas=false;
    this.paciente="";
    this.imagensrc="";
    this.imagensize="100%";
  
  }


  

  ngOnInit() {

    this.fecha=this.datestr();
    console.log(this.fecha); 
    this.ver_nombres();
    this.ver_citas('','',this.agenda);
    this.ver_agendas();
    this.fecha=
    $(document).ready(function(){



    });
    

  }

  datestr():string{

    var dt = new Date(),
    current_date:any = dt.getDate(),
    current_month:any = dt.getMonth() + 1,
    current_year:any = dt.getFullYear(),
    current_hrs:any = dt.getHours(),
    current_mins:any = dt.getMinutes(),
    current_secs:any = dt.getSeconds(),
    
  
  // Add 0 before date, month, hrs, mins or secs if they are less than 0
  current_date = current_date < 10 ? '0' + current_date : current_date;
  current_month = current_month < 10 ? '0' + current_month : current_month;
  current_hrs = current_hrs < 10 ? '0' + current_hrs : current_hrs;
  current_mins = current_mins < 10 ? '0' + current_mins : current_mins;
  current_secs = current_secs < 10 ? '0' + current_secs : current_secs;
  
  // Current datetime
  // String such as 2016-07-16T19:20:30
  return  String(current_year + '-' + current_month + '-' + current_date);

  }

  datestr2():string{

    var dt = new Date(this.serializedDate.value),
    current_date:any = dt.getDate(),
    current_month:any = dt.getMonth() + 1,
    current_year:any = dt.getFullYear(),
    current_hrs:any = dt.getHours(),
    current_mins:any = dt.getMinutes(),
    current_secs:any = dt.getSeconds(),
    
  
  // Add 0 before date, month, hrs, mins or secs if they are less than 0
  current_date = current_date < 10 ? '0' + current_date : current_date;
  current_month = current_month < 10 ? '0' + current_month : current_month;
  current_hrs = current_hrs < 10 ? '0' + current_hrs : current_hrs;
  current_mins = current_mins < 10 ? '0' + current_mins : current_mins;
  current_secs = current_secs < 10 ? '0' + current_secs : current_secs;
  
  // Current datetime
  // String such as 2016-07-16T19:20:30
  return  String(current_year + '-' + current_month + '-' + current_date);

  }

  ver_agendas(){

    this.service_agendas.getAgendas().subscribe((data)=>{

      console.log(data);
      this.agendas=data;

    });
}


  ver_citas(paciente?,fecha?,tipo?){

    this.citas=[];
    this.hay_citas=false;
    this.service.getCitas(paciente,fecha,tipo).subscribe((data:Citas[])=>{

      console.log(data);
      this.citas=data;
      if (this.citas.length>0) this.hay_citas=true;
      else this.hay_citas=false;
     
     

    },error=>{
      this.error=error;
      this.openError(error);
      this.hay_citas=false;
    });
}

ver_nombres(fecha?:string){

  this.nombres=[];  
  this.service.getNombres(fecha).subscribe((data:Nombres[])=>{

    console.log(data);
    this.nombres=data;

  });
}


cambio(selected){

  
  this.fecha=this.datestr2();
  console.log(this.fecha);
  this.ver_citas(selected.value,this.fecha,this.agenda);
  

}

ver_imagen(selected){

    
  switch(selected.value){

      case "0":this.imagensrc="assets/imagenes/panoramica.jpg";break;
      case "1":this.imagensrc="assets/imagenes/perfil.jpg";break;

  }
 

}

zoom(event){
   if (event.checked) {
     this.imagensize="200%";
    
  }
   else {
   this.imagensize="100%";
  
   } 
}

cambio_agenda(selected){

  
  this.agenda=selected.value;
  console.log(this.agenda);
  this.fecha=this.datestr2();
  console.log(this.fecha);
  this.ver_citas('',this.fecha,this.agenda);
  

}

procesarPropagarHistoria(event){

  this.tabSelectedIndex=2;
  this.cita=event;
  console.log(event);
}

procesarPropagarAnamnesis(event){

  this.tabSelectedIndex=4;
  this.cita=event;
  this.paciente=this.cita.identificacion;
  this.fecha=this.cita.fecha;
  console.log(this.fecha);
  console.log(this.paciente);
  this.ver_citas(this.paciente,this.fecha,this.agenda);
  
 
}

procesarPropagarPagos(event){

  this.tabSelectedIndex=1;
  this.cita=event;
  this.paciente=this.cita.identificacion;
  this.fecha=this.cita.fecha;
  console.log(this.fecha);
  console.log(this.paciente);
 // this.ver_citas(this.paciente,this.fecha);
  
 
}

procesarVolver(event){

        this.tabSelectedIndex=event;
}

onTabChange(event:MatTabChangeEvent) {
  console.log(event.index);
  this.tabSelectedIndex=event.index;
}

gotoTop(){

  const element = document.querySelector('#scrollId');
  element.scrollIntoView();
}

addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
 
 
 this.fecha=this.serializedDate.value.toISOString().substr(0, 10);
 
 this.ver_nombres(this.fecha);
 this.ver_citas('',this.fecha,this.agenda);
 
}

openError(error:HttpErrorResponse) {

  console.log(error);
  
  const dialogRef = this.dialog.open(DialogError,{

      width:'500px',
      data:{title:'Error de Http',error:error}

  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

recargar(){

  this.fecha=this.datestr2();
  this.paciente="";
  this.ver_citas(this.paciente,this.fecha,this.agenda);
}

}

@Component({
  selector: 'dialog-error',
  templateUrl: 'dialog-error.html',
})
export class DialogError implements OnInit  {

  constructor(
  public dialogRef: MatDialogRef<DialogError>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData){}

  ngOnInit(){}

 } 
