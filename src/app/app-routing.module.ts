import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { home } from './components/home/home.component';
import { services } from './components/services/service.component';
import { about } from './components/about/about.component';
import { register } from './components/users/register/register.component';
import { cardiologist } from './components/cardiologist/cardiologist.component';
import { opthamologist } from './components/opthamologist/opthamologist.component';
import { paedetrician } from './components/paedetrician/paedetrician.component';
import { usersComponent } from './components/users/users.component';
import { userLogin } from './components/users/login/userLogin.component';
import { docRegiter } from './components/doctors/register/docRegister.component';
import { doctorDashboard } from './components/doctors/doctors.component';
import { doctorLogin } from './components/doctors/login/doctorLogin.component';

const routes: Routes = [
  {path:'',component:home},
  {path:'service', component:services},
  {path:'about', component:about},
  {path:'users', component:usersComponent},
  {path:'users/login',component:userLogin},
  {path:'doctors', component:doctorDashboard},
  {path:'doctors/login', component:doctorLogin},
  {path:'register',component:register},
  {path:'cardiologist', component:cardiologist},
  {path:'opthamologist',component:opthamologist},
  {path:'paedetrician',component:paedetrician},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
