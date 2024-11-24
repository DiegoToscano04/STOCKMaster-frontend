import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path: 'login',
    component:LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'admin',
    component:DashboardComponent,
   children:[
    {
        path:'profile',
        component:ProfileComponent
    },
    {
      path:'',
      component: BienvenidoComponent
    }
    
   ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
