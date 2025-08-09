import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './feature/products/components/product/product';
import { ResourceContainerComponent } from './feature/Resourse/components/resource-container/resource-container.component';

// const routes: Routes = [
//   { path: 'product', component: ProductComponent },
//   { path: 'user', component: UserComponent },
// import { ProductComponent } from './feature/products/components/table/table.component';
// import { ResourceContainerComponent } from './feature/Resourse/components/resource-container/resource-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'resources', component: ResourceContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
