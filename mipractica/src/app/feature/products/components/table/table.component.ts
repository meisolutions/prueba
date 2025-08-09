
import { ProductosService } from "../../https/product.http";

import { pipe, Subject, Subscription, takeUntil } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from "@angular/core";
import { IProduct } from "../../interfaces/product.interface";
import { CommonService } from "../../servicios/common.service";

@Component({
  selector: 'app-product-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class ProductTableComponent {
  @Input() productos: IProduct[] = []; // Recibe datos del componente padre
  @Output() productoSeleccionado = new EventEmitter<IProduct>(); // Emite al padre


  articulos: any;


  // Subscription: Relacion/conexion entre observable y observador
  // observable: representa un dato o un flujo y emite el mesaje
  // observador: el que escucha los mensajes 
  subscription = new Subscription();


  // nuevo
  subscriptiOnDestroy = new Subject();

  constructor(
    // No se puede injectar mas de 5
    private _productosService: ProductosService,
    private commonService: CommonService
  ) { }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    const data = this.commonService.getProduct();

    console.log('****FData****', data);


    this.subscription.add(
      this._productosService.getProducto()
        // Nuevo
        // .pipe(
        //   takeUntil(this.subscriptiOnDestroy)
        // )
        .subscribe(
          {
            next: (data) => {
              this.articulos = data;
            },
            error: (err) => {
              console.error('Error al obtener productos:', err);
            }
          })
    );

  }


  onRowClick(producto: IProduct): void {
    this.productoSeleccionado.emit(producto);
    
    this.commonService.setProduct(producto);

  }

  //No deberia usarse esta forma 
  tradicional() {
    this._productosService.getProducto().subscribe(data => {
      console.log(data)
    })
  }


}
