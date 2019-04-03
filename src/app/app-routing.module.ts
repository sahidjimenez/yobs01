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
import { AuthGuard } from './guards/auth.guard';
import { TipoDeUsuarioComponent }  from './components/tipo-de-usuario/tipo-de-usuario.component';


//componentes de trabajos

import { InicioComponent } from './components/inicio/inicio.component';
import { CrearTrabajoComponent } from './components/crear-trabajo/crear-trabajo.component';
import { DetallesTrabajoComponent } from './components/detalles-trabajo/detalles-trabajo.component';
import { EditarTrabajoComponent } from './components/editar-trabajo/editar-trabajo.component';

const routes: Routes = [

  {path:'',component:InicioComponent},
  {path:'home',component:HomeComponent},

  {path:'about',component:AboutComponent},
  {path:'admin', component:AdminComponent,canActivate:[AuthGuard]},
  //modificaciones detalles Trabajos
  {path:'detalles/:id',component:DetallesTrabajoComponent,canActivate:[AuthGuard]},
  {path:'details/:id',component:DetailsComponent,canActivate:[AuthGuard]},
  //modificaciones editar Trabajos
  {path:'editar:id',component:EditarTrabajoComponent,canActivate:[AuthGuard]},
  {path:'edit/:id',component:EditComponent,canActivate:[AuthGuard]},

  {path:'tipo',component:TipoDeUsuarioComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},

  //
  {path:'nuevotrabajo',component:CrearTrabajoComponent,canActivate:[AuthGuard]},
  {path:'nueva',component:NuevaRecetaComponent,canActivate:[AuthGuard]},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
