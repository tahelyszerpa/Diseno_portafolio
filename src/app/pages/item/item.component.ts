import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductosService} from '../../services/productos.service';
import {productodescripcion} from '../../interfaces/producto-descrip.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
producto: productodescripcion;
  constructor( private route: ActivatedRoute , 
     public productoService: ProductosService) { }

  ngOnInit() {
this.route.params
.subscribe( parametros => {
  //console.log(parametros ['id']);
this.productoService.getProducto(parametros['id'])
.subscribe( (producto: productodescripcion )=> {
  
console.log(producto);

});
});

  }


}
