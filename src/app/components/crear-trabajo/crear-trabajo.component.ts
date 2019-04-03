import { Component, OnInit } from '@angular/core';
import { TrabajoInterface } from "../../models/trabajo";
import { AuthService } from '../../services/auth.service';
import { NuevoTrabajoService } from '../../services/nuevo-trabajo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-trabajo',
  templateUrl: './crear-trabajo.component.html',
  styleUrls: ['./crear-trabajo.component.css']
})
export class CrearTrabajoComponent implements OnInit {

  lat = 19.832264;
  lng = -90.556898;
  locationChosen = false;

  trabajo :TrabajoInterface = {
    id:'',
    titulo:'',
    descripcion:'',
    especificaciones:'',
    fechaPublicacion:'',
    lat:0,
    lng:0,
    userId:'',
    userNombre:''

  }
  constructor(
    private authService:AuthService,
    private nuevoTrabajoService:NuevoTrabajoService,
    private router:Router
  ) { }

  ngOnInit() {

  }
  agregarMarcador(evento){

    this.trabajo.lng = evento.coords.lng
    this.trabajo.lat = evento.coords.lat
    this.locationChosen = true;
    console.log(evento.coords.lng,evento.coords.lat);

  }

  onGuardarReceta({value}:{value:TrabajoInterface}){
    value.fechaPublicacion = (new Date()).getTime();
    value.lat = this.trabajo.lat;
    value.lng = this.trabajo.lng;
    this.authService.getAuth().subscribe(user =>{
      value.userId = user.uid;
      value.userNombre = user.displayName;
        this.nuevoTrabajoService.addNewTrabajo(value);
    })
    this.router.navigate(['/']);
  }




}
