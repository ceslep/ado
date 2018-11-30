import { Injectable } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Agendas } from '../models/agendas';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  private url;
  public urlAgendas:string="getAgendas.php";

  
  constructor(private http:HttpClient,private platformLocation:PlatformLocation) { 

    this.url=!environment.production?environment.url+"php/":this.platformLocation.getBaseHrefFromDOM()+"php/";
   // this.url="http://192.168.1.24/ado/php/";
    this.urlAgendas=this.url+this.urlAgendas;
  }

  
  getAgendas():Observable<Agendas[]>{

    return this.http.get<Agendas[]>(this.urlAgendas);

  }
}
