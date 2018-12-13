import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPagina} from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})

export class InfopaginaService {
info: InfoPagina ={};
cargada = false;
desarrollo:any[] = [];

  constructor(private http:HttpClient){ 
this.cargarinfo();
   this.cargadesarrollo();
    

  }

private cargarinfo(){
  this.http.get('assets/data/data-pagina.json')
  .subscribe((resp:InfoPagina)=>{
    this.cargada=true;
    this.info= resp;
    console.log(resp);
});
}


private cargadesarrollo() {
  this.http.get('https://portafolio-7367f.firebaseio.com/desarrollo.json')
  .subscribe((resp: any[]) => {
      this.desarrollo=resp;
   // console.log(resp);
});

}
}
