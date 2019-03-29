import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService
  ) { }

  ngOnInit() {
  }


  googleLogin(){
    this.authService.loginGoogle()
    .then((res) =>{
      console.log(res);
    })
    .catch(err=>console.log(err.message))


  }

  facebookLogin(){
    this.authService.loginFacebook()
    .then((res) =>{
      console.log(res);
    })
    .catch(err=>console.log(err.message))

  }

  twitterLogin(){}

  githubLogin(){
    this.authService.loginGithub()
    .then((res) =>{
      console.log(res);
    })
    .catch(err=>console.log(err.message))
  }


}
