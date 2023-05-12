import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { HomeComponent } from './employee/home/home.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';

const routes: Routes = [
//   {path:'home',component:HomeComponent},
//   {path:'create-employee',component:CreateEmployeeComponent},
//   {path:'view-employee',component:ViewEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
