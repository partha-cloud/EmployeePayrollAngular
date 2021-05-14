import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch:'full'},
  {path: 'employee-form', component: EmployeeFormComponent},
  {path: 'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
