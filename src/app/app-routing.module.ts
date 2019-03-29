import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./components/about/about.component";
import { AdminComponent }  from "./components/admin/admin.component";
import { DetailsComponent }  from "./components/details/details.component";
import { EditComponent }  from "./components/edit/edit.component";
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent }  from "./components/not-found/not-found.component";
import { NuevaRecetaComponent } from "./components/nueva-receta/nueva-receta.component";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'admin', component:AdminComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'edit/:id',component:EditComponent},
  {path:'login',component:LoginComponent},
  {path:'nueva',component:NuevaRecetaComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
