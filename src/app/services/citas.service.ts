import { Injectable } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Citas } from '../models/citas';
import { Nombres } from '../models/nombres';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class CitasService {

  private url;
 
  public urlAgendas:string="getCitas_.php";
  public urlNombres:string="getNombres.php";

  
  constructor(private http:HttpClient,private platformLocation:PlatformLocation) { 

    this.url=!environment.production?environment.url+"php/":this.platformLocation.getBaseHrefFromDOM()+"php/";
   // this.url="http://192.168.1.24/ado/php/";
    this.urlAgendas=this.url+this.urlAgendas;
    this.urlNombres=this.url+this.urlNombres;
  }

  
  getCitas(paciente?,fecha?,tipo?):Observable<Citas[]>{

    
    let params=new HttpParams;
    params=params.append('paciente',paciente);
    params=params.append('fecha',fecha);
    params=params.append('tipo',tipo);
    return this.http.get<Citas[]>(this.urlAgendas,{params});

  }

  getNombres(fecha?):Observable<Nombres[]>{

    let params=new HttpParams;
    params=params.append('fecha',fecha);
    return this.http.get<Nombres[]>(this.urlNombres,{params});

  }
}
