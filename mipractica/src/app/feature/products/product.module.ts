import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductosService } from './https/product.http';
import { ProductComponent } from './components/product/product';
import { ProductTableComponent } from './components/table/table.component';
import { TableResumen } from './components/table-resumen/table-resumen.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductTableComponent,
    TableResumen
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [ProductosService],
  exports: [ProductComponent]
})
export class ProductModule { }
