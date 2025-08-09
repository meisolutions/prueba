import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './feature/products/components/product/product';
import { UserComponent } from './feature/users/component/user-list/user.list.component';
import { ResourceComponent } from './feature/products/components/resourse/resourse';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
