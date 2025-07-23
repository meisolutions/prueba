import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './feature/products/components/table/table.component';
import { UserComponent } from './feature/users/component/user-list/user.list.component';
import { ResourceComponent } from './feature/products/components/resourse/resourse';

const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'resourse', component: ResourceComponent,
    
   },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
