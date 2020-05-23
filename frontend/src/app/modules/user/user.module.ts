import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import { UsertableComponent } from 'src/app/components/usertable/usertable.component';
import { EdituserformComponent } from 'src/app/components/edituserform/edituserform.component';
import { AppRoutingModule } from "../../app-routing.module";
import { RegisteruserformComponent } from 'src/app/components/registeruserform/registeruserform.component';

@NgModule({
  declarations: [
    UsertableComponent,
    EdituserformComponent,
    RegisteruserformComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],

  exports:[UsertableComponent,EdituserformComponent,RegisteruserformComponent]
})
export class UserModule{ }
