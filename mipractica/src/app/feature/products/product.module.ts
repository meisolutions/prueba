import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductosService } from './https/product.http';
import { ProductComponent } from './components/product/product';
import { ProductTableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [ProductosService],
  exports: [ProductComponent]
})
export class ProductModule { }
