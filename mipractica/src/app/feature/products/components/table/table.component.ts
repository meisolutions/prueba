import { Component, Inject, OnInit } from "@angular/core";
import { ProductosService } from "../../https/product.http";
import { IProduct, IProductList } from "../../interfaces/product.interface";
import { Subscription } from "rxjs";

@Component({
  selector: 'arn-table-product',
  templateUrl: './table.component.html'
})

export class ProductComponent implements OnInit {
  articulos: any;

  // _articulosService = Inject(ProductosService);
  subscription=  new Subscription();
   // agregar subscription
   // Destruir subscription

  constructor(
    // No se puede injectar mas de 5
    private _productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this._productosService.getProducto().subscribe({
      next: (data) => {
        this.articulos = data;
      },
      error: (err) => {
        console.error('Error al obtener productos:', err);
      }
    });
  }

tradicional(){
  this._productosService.getProducto().subscribe(data => {
    console.log(data)
})
}


}
