import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './component/user-list/user.list.component';


@NgModule({
  declarations: [
    // AppComponent
    UserComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class UserModule { }
