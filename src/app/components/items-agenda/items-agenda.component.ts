import { Component, OnInit,Input,Output,Inject,EventEmitter } from '@angular/core';
import { Citas } from '../../models/citas';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


declare var $:any;



export interface DialogData {
  title: string;
  name: string;
}



@Component({
  selector: 'items-agenda',
  templateUrl: './items-agenda.component.html',
  styleUrls: ['./items-agenda.component.css']
})
export class ItemsAgendaComponent implements OnInit {

  
   datos:DialogData;
   
    @Input() cita:Citas;
    estilo:string="{'background-color':'green'}"; 
    @Output()
    propagar = new EventEmitter<Citas>();
    @Output()
    anamnesis = new EventEmitter<Citas>();
    @Output()
    pagos = new EventEmitter<Citas>();
    cara:string="amarilla";
    constructor(public dialog: MatDialog,private domSanitizer: DomSanitizer ){}

    ngOnInit(){

     

    }

    

    openDialog(nombres) {

      console.log(nombres);
      
      const dialogRef = this.dialog.open(DialogContentFirmaDialog,{

          width:'90vw',
          data:{title:'',name:nombres}

      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    openHistory(cita){

      this.propagar.emit(cita); 
        
    }

    openAnamnesis(cita){

      this.anamnesis.emit(cita); 
        
    }

    openPagos(cita){

      if (cita.cara!="AZUL")
      this.pagos.emit(cita); 
      else
      console.log(cita.cara);
    }

    verFoto(name,foto){

      console.log(foto);
      
      const dialogRef = this.dialog.open(DialogContentFotoDialog,{

          width:'500px',
          data:{name:name,foto:foto}

      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });

    }

    setStyle(cara){

      
      let styles = {
        'background-image': "url('../../assets/caras/"+cara.toLowerCase()+".png')",
        'background-size': '100%'
       
      };
      return styles;  
      
    }

    sms(telefono){

      return this.domSanitizer.bypassSecurityTrustResourceUrl('sms:+57'+telefono+'?body=Recordatorio%20de%20Cita.');
    }

  }
    @Component({
      selector: 'dialog-content-firma-dialog',
      templateUrl: 'dialog-content-firma-dialog.html',
    })
    export class DialogContentFirmaDialog implements OnInit  {

      constructor(
      public dialogRef: MatDialogRef<DialogContentFirmaDialog>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData){}

      ngOnInit(){

        var x1;
        var y1;
        var antx;
        var anty;
        var click=false;
        
        $(document).ready(function(){
    
        
          $("#myCanvas").on("touchstart mousedown",function(event){
            
            
            click=true;
            let x;
            let y;
            if(event.offsetX == undefined){ // para firefox
                x = event.pageX - $(this).offset().left;
                y = event.pageY - $(this).offset().top;
                
            }
            else{ // chrome
              x = event.offsetX;
              y = event.offsetY;
            }
            antx=x;
            anty=y;
            
          });
          
          
          $("#myCanvas").on("touchend mouseup",function(event){
            
            click=false;
            let x;
            let y;
            if(event.offsetX == undefined){ // para firefox
                x = event.pageX - $(this).offset().left;
                y = event.pageY - $(this).offset().top;
            }
            else{ // chrome
              x = event.offsetX;
              y = event.offsetY;
            }
            antx=x;
            anty=y;
            
          });
          
            $("#myCanvas").on("touchmove mousemove",function(event){
            
            if (click){
            let x;
            let y;
            if(event.offsetX == undefined){ // para firefox
                x = event.pageX - $(this).offset().left;
                y = event.pageY - $(this).offset().top;
            }
            else{ // chrome
              x = event.offsetX;
              y = event.offsetY;
            }
            
            x1=x;
            y1=y;
            console.log(x1);
            console.log($(this).offset().left);
            $('canvas').drawPath({
                  strokeStyle: '#000',
                  strokeWidth: 4,
                  p1: {
                  type: 'line',
                  x1: x1, y1: y1,
                  x2: antx, y2: anty
                  
                  },
                  
            });	
            antx=x1;
            anty=y1;
            }
          });
          
          
        });
        

      }

      limpiar(){

        $('#myCanvas').clearCanvas();
      }

     

     
    }

    @Component({
      selector: 'dialog-content-foto-dialog',
      templateUrl: 'dialog-content-foto-dialog.html',
    })
    export class DialogContentFotoDialog implements OnInit  {

      constructor(
      public dialogRef: MatDialogRef<DialogContentFotoDialog>,
      @Inject(MAT_DIALOG_DATA) public data: string){}

      ngOnInit(){}

    }
    



