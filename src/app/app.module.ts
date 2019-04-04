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
import { TipoDeUsuarioComponent } from './components/tipo-de-usuario/tipo-de-usuario.component';
import { LoginComponent } from './components/login/login.component';

import { environment } from "../environments/environment";
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import {FormsModule} from '@angular/forms';

//componentes de crear trabajos
import { InicioComponent } from './components/inicio/inicio.component';
import { CrearTrabajoComponent } from './components/crear-trabajo/crear-trabajo.component';
import { DetallesTrabajoComponent } from './components/detalles-trabajo/detalles-trabajo.component';
import { EditarTrabajoComponent } from './components/editar-trabajo/editar-trabajo.component';

//angular materials
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';


//agm maps
import { AgmCoreModule } from '@agm/core';
//guard
import { AuthGuard }  from './guards/auth.guard';
//servicio
import { TipoDeUsuarioService } from './services/tipo-de-usuario.service';
import { AuthService } from './services/auth.service';
import { RecetaService } from './services/receta.service';
import { NuevoTrabajoService } from './services/nuevo-trabajo.service';


//componentes de angular materials
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';


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
    FormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqqahRzzlBRRkdnu7StK0I8wZCE5hhUbg'
    }),
    //AngularMaterials
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
              AuthService,
              RecetaService,
              AuthGuard,
              TipoDeUsuarioService,
              NuevoTrabajoService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
