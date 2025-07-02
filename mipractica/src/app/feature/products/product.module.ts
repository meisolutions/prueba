import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductosService } from './https/product.http';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [ProductosService ],
  bootstrap: []
})
export class ProductModule { }
