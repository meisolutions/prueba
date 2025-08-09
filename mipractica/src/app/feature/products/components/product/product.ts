import { Component, inject, OnInit } from "@angular/core";
import { ProductosService } from "../../https/product.http";
import { IProduct } from "../../interfaces/product.interface";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrls: ['./product.scss']
})
export class ProductComponent implements OnInit {
  productos: IProduct[] = [];
  productoSeleccionado: IProduct | null = null;
  total: number = 0;
  subscription = new Subscription();

  constructor(
    private _productosService: ProductosService
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // consume el servicio HTTP
  cargarProductos(): void {
    this.subscription.add(
      this._productosService.getProducto().subscribe({
        next: (data) => {
          this.productos = data;
        },
        error: (err) => {
          console.error('Error al obtener productos:', err);
        }
      })
    );
  }

  // evento para seleccionar un producto
  onProductoSeleccionado(producto: IProduct): void {
    this.productoSeleccionado = producto;
   
  }

  // calcula el total de los productos
  calcularTotal(): void {
    this.total = this.productos.reduce((sum, producto) => sum + producto.precio, 0);
  }
}