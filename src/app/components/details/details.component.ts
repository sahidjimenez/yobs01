import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import { RecetaInterface } from '../../models/receta';
import { RecetaService }  from '../../services/receta.service';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})


export class DetailsComponent implements OnInit {

idReceta:string;
idUsuarioLogado:string;


receta :RecetaInterface = {
  id:'',
  titulo:'',
  descripcion:'',
  preparacion:'',
  ingredientes:'',
  temporada:'',
  fechaPublicacion:'',
  userId:'',
  userNombre:''

}
  constructor(
    private receteService:RecetaService,
    private authService:AuthService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.onComprobarUserLogin();
    this.getDetallesReceta();
  }

  onComprobarUserLogin(){
    this.authService.getAuth().subscribe(user=>{
      if(user){
        this.idUsuarioLogado = user.uid;
      }
    });
  }

  getDetallesReceta(){
    this.idReceta= this.route.snapshot.params['id'];
    this.receteService.getOneReceta(this.idReceta).subscribe(receta=>this.receta = receta)
  }

  onClickDelete(){
    if (confirm('¿Estás seguro?')) {
        this.receteService.deteleReceta(this.receta);
        this.router.navigate(['/']);
    }
  }






}
