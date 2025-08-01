import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IProduct } from "../../interfaces/product.interface";

@Component({
  selector: 'app-product-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class ProductTableComponent {
  @Input() productos: IProduct[] = []; // Recibe datos del componente padre
  @Output() productoSeleccionado = new EventEmitter<IProduct>(); // Emite al padre

  // evento para seleccionar un producto
  onRowClick(producto: IProduct): void {
    this.productoSeleccionado.emit(producto);
  }
}
