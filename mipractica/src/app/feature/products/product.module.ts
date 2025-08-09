import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductosService } from './https/product.http';
import { ProductComponent } from './components/product/product';
import { ProductTableComponent } from './components/table/table.component';
import { CommonService } from './servicios/common.service';
import { DataSelectComponent } from './components/data-select-table/data-select-table.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductTableComponent,
    DataSelectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [ProductosService, CommonService],
  exports: [ProductComponent]
})
export class ProductModule { }


