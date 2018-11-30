import { TouchSequence } from "selenium-webdriver";

export class Citas {

    paciente:string;
    identificacion:string;
    nombres:string;
    fecha:string;
    horas:string;
    procedimiento:string;
    style:string;
    foto:string;
    cara:string;
    tipo:string;
    telefono_movil:string;

    constructor(){
        this.paciente="";
        this.identificacion="";
        this.nombres="";
        this.fecha="";
        this.horas="";
        this.procedimiento="";
        this.style="";
        this.foto="";
        this.cara="";
        this.tipo="";
        this.telefono_movil="";
    }
}
