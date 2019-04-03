import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { TrabajoInterface } from '../../models/trabajo';
import { AuthService } from '../../services/auth.service';
import { NuevoTrabajoService } from '../../services/nuevo-trabajo.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-detalles-trabajo',
  templateUrl: './detalles-trabajo.component.html',
  styleUrls: ['./detalles-trabajo.component.css']
})
export class DetallesTrabajoComponent implements OnInit {

  idTrabajo:string;
  idUsuarioLogado:string;
  lat = 19.832264;
  lng = -90.556898;

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
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.onComprobarUserLogin();
    this.getDetallesTrabajos();
  }

  onComprobarUserLogin(){
    this.authService.getAuth().subscribe(user=>{
      if(user){
        this.idUsuarioLogado = user.uid;
      }
    });
  }

  getDetallesTrabajos(){
    this.idTrabajo = this.route.snapshot.params['id'];
    this.nuevoTrabajoService.getOneTrabajo(this.idTrabajo).subscribe(trabajo => this.trabajo = trabajo)
  }


  onClickDelete(){
    if (confirm('¿Estás seguro?')) {
        this.nuevoTrabajoService.deteleTrabajo(this.trabajo);
        this.router.navigate(['/']);
    }
  }

}
