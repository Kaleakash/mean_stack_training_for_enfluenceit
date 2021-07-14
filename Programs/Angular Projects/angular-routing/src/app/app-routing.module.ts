import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BannerComponent } from './banner/banner.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginAuthGuard } from './login.auth.guards';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductComponent } from './product/product.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';

// it is use to write the routing path rules. 
const routes: Routes = [
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"login",component:LoginComponent},
  {path:"banner",component:BannerComponent},
  {path:"home",component:DashboardComponent,canActivate:[LoginAuthGuard],
  children:[
    {path:"sub1",component:Sub1Component},
    {path:"sub2",component:Sub2Component},
    {path:"sub3",component:Sub3Component},
    {path:"product/:pid",component:ProductComponent}
  ]},
  {path:"",redirectTo:"banner",pathMatch:"full"},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
