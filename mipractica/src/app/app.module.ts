import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './feature/products/product.module';
import { ResourceModule } from './feature/Resourse/resource.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    ResourceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Agregar las rutas de navegacion
// que me cargue mi feature



