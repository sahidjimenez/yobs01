import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from "@angular/router";
import {TrabajoInterface} from '../../models/trabajo';
import {NuevoTrabajoService} from '../../services/nuevo-trabajo.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-editar-trabajo',
  templateUrl: './editar-trabajo.component.html',
  styleUrls: ['./editar-trabajo.component.css']
})
export class EditarTrabajoComponent implements OnInit {

  idTrabajo:string;
  lat = 19.832264;
  lng = -90.556898;
  locationChosen=false;

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
    private route:ActivatedRoute,
    private router:Router,
    private nuevotrabajoService:NuevoTrabajoService) {

     }

  ngOnInit() {
    this.getDetallesTrabajo();

  }

  agregarMarcador(evento){

    this.trabajo.lng = evento.coords.lng
    this.trabajo.lat = evento.coords.lat
    this.locationChosen = true;
    console.log(evento.coords.lng,evento.coords.lat);
    console.log(this.trabajo);

  }

  getDetallesTrabajo(){

    this.idTrabajo = this.route.snapshot.params['id'];
    this.nuevotrabajoService.getOneTrabajo(this.idTrabajo).subscribe(trabajo=>this.trabajo = trabajo);
  }


  onModificarTrabajo({value}:{value:TrabajoInterface}){
    value.id = this.idTrabajo;
    value.lng=this.trabajo.lng;
    value.lat=this.trabajo.lat;
    this.nuevotrabajoService.updateTrabajo(value);
    this.router.navigate(['/detalles/'+this.idTrabajo]);
  }

}
