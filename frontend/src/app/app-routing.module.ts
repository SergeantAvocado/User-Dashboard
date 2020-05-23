import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components
import { UsertableComponent } from './components/usertable/usertable.component';
import { EdituserformComponent } from './components/edituserform/edituserform.component';
import { RegisteruserformComponent } from './components/registeruserform/registeruserform.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'users/create', component:RegisteruserformComponent},
  {path:'users/:id', component:EdituserformComponent},
  {path:'users', component:UsertableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
