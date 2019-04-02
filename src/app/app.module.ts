import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NuevaRecetaComponent } from './components/nueva-receta/nueva-receta.component';

import { LoginComponent } from './components/login/login.component';

import { environment } from "../environments/environment";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {FormsModule} from '@angular/forms';



//guard
import { AuthGuard }  from './guards/auth.guard';
//servicio
import { TipoDeUsuarioService } from './services/tipo-de-usuario.service';
import { AuthService } from './services/auth.service';
import { RecetaService } from './services/receta.service';
import { TipoDeUsuarioComponent } from './components/tipo-de-usuario/tipo-de-usuario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearTrabajoComponent } from './components/crear-trabajo/crear-trabajo.component';
import { DetallesTrabajoComponent } from './components/detalles-trabajo/detalles-trabajo.component';
import { EditarTrabajoComponent } from './components/editar-trabajo/editar-trabajo.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminComponent,
    DetailsComponent,
    EditComponent,
    HomeComponent,
    NavbarComponent,
    NotFoundComponent,
    NuevaRecetaComponent,
    LoginComponent,
    TipoDeUsuarioComponent,
    InicioComponent,
    CrearTrabajoComponent,
    DetallesTrabajoComponent,
    EditarTrabajoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService,RecetaService,AuthGuard,TipoDeUsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
