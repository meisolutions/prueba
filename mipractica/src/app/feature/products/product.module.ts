import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductosService } from './https/product.http';
import { ProductComponent } from './components/table/table.component';
import { ResourceComponent } from './components/resourse/resourse';
import { ResourceService } from './https/resourse.http';


@NgModule({
  declarations: [
    // AppComponent
    ProductComponent, 
    ResourceComponent
  ],
  imports: [
    BrowserModule, 
    // AppRoutingModule
  ],
  providers: [ProductosService, ResourceService], 
  bootstrap: []
})
export class ProductModule { }


