import { Component, OnInit } from '@angular/core';
import { AuthService }  from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public userNombre : string;
  public userEmail : string;
  public userPicture :string;
  public userId :string;
  public isLogin :boolean;

  public tipoUsuario:string;


  constructor(
    private authService: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.onComprobarUserLogin();
    this.onComprobarTipoUsuario();
  }

  onComprobarUserLogin(){
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        //console.log(auth);
        this.isLogin = true;
        this.userNombre = auth.displayName;
        this.userEmail = auth.email;
        this.userPicture = auth.photoURL;
        this.userId = auth.uid;
      }else{
        this.isLogin = false;
      }
    })
  }

  onComprobarTipoUsuario(){
    if(localStorage.getItem("tipoUsuario")!=null){

      this.tipoUsuario = localStorage.getItem("tipoUsuario");
      console.log(this.tipoUsuario);
    }else{
      this.router.navigate(['/home']);
      console.log("sahid"+this.tipoUsuario);
    }
  }

  onLogout(){
    this.authService.logout();
  }

}
