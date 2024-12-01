import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BienvenidoComponent } from './pages/admin/bienvenido/bienvenido.component';
import { ProductsComponent } from './pages/products/products.component';
import { AddComponent } from './pages/add/add.component';
import { UpdateComponent } from './pages/update/update.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { SalesComponent } from './pages/sales/sales.component';
import { UserBienvenidoComponent } from './pages/user/user-bienvenido/user-bienvenido.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    pathMatch: 'full',

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
    path:'products',
    component:ProductsComponent,
    pathMatch:'full'
  },
  {
    path:'add',
    component:AddComponent,
    pathMatch:'full'
  },
  {
    path:'update',
    component:UpdateComponent,
    pathMatch:'full'
  },
  {
    path:'historial',
    component:HistorialComponent,
    pathMatch:'full'
  },
  {
    path:'sales',
    component:SalesComponent,
    pathMatch:'full'
  },
  {
    path:'user-bienvenido',
    component:UserBienvenidoComponent,
    pathMatch:'full'
  },
  {
    path:'user-sidebar',
    component:UserSidebarComponent,
    pathMatch:'full'
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    children:[
      {
          path:'profile',
          component:ProfileComponent
      },
      {
        path:'',
        component: UserBienvenidoComponent
      },
      {
        path:'products',
        component:ProductsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
