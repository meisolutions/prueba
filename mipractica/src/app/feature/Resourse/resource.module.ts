import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ResourceListComponent } from './components/resource-list/resource-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ResourceContainerComponent } from './components/resource-container/resource-container.component';
import { ResourceService } from './resource.http';

@NgModule({
  declarations: [
    ResourceListComponent,
    ProductDetailsComponent,
    ResourceContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ResourceService
  ],
  exports: [
    ResourceListComponent,
    ProductDetailsComponent,
    ResourceContainerComponent
  ]
})
export class ResourceModule { } 