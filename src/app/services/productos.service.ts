import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {producto} from '../interfaces/producto.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
cargando=true;
productos:producto[] = [];


  constructor(private http: HttpClient) { 
    this.cargarproductos();

  }


  private cargarproductos(){
    this.http.get('https://portafolio-7367f.firebaseio.com/productos_idx.json')
    .subscribe( (resp: producto [])=>{
console.log(resp);
this.productos=resp;
this.cargando=false;
    });
  }
}
