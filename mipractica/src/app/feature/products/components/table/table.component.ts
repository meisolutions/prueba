import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { ProductosService } from "../../https/product.http";
import { IProduct, IProductList } from "../../interfaces/product.interface";
import { Subscription } from "rxjs";

@Component({
  selector: 'arn-table-product',
  templateUrl: './table.component.html'
})

export class ProductComponent implements OnInit, OnDestroy {
  articulos: any;


 // Subscription: Relacion/conexion entre observable y observador
 // observable: representa un dato o un flujo y emite el mesaje
 // observador: el que escucha los mensajes 
  subscription=  new Subscription();
   // agregar subscription
   // Destruir subscription

  constructor(
    // No se puede injectar mas de 5
    private _productosService: ProductosService
  ) { }


  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }

  ngOnInit(): void {

    this.subscription.add(
      this._productosService.getProducto().subscribe({
      next: (data) => {
        this.articulos = data;
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      }
    })
    );
    
  }

 //No deberia usarse esta forma 
tradicional(){
  this._productosService.getProducto().subscribe(data => {
    console.log(data)
})
}


}
