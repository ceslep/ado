import { Injectable } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { DatosPaciente } from '../models/datos-paciente';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosPacienteService {

  private url;
  public urlPacientes:string="getPacientes.php";
 
  constructor(private http:HttpClient,private platformLocation:PlatformLocation) { 

    this.url=!environment.production?environment.url+"php/":this.platformLocation.getBaseHrefFromDOM()+"php/";
    //this.url="http://192.168.1.24/ado/php/";
    this.urlPacientes=this.url+this.urlPacientes;
     
  }


  getPaciente(paciente?):Observable<DatosPaciente>{

    let params=new HttpParams;
    params=params.append('paciente',paciente);
    return this.http.get<DatosPaciente>(this.urlPacientes,{params})  }
}
