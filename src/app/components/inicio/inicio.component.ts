import { Component, OnInit } from '@angular/core';
import { NuevoTrabajoService }    from "../../services/nuevo-trabajo.service";
import { TipoUsuarioInterface } from '../../models/tipoUsuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

trabajos:TipoUsuarioInterface[];

   lat = 19.832264;
   lng = -90.556898;
  constructor(
    private nuevoTrabajoService:NuevoTrabajoService
  ) { }

  ngOnInit() {
    this.todosTrabajos();
  }
  todosTrabajos(){
    this.nuevoTrabajoService.getAllTrabajos()
    .subscribe(trabajos=>this.trabajos = trabajos);
    
  }
}
