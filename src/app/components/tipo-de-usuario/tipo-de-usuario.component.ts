import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-de-usuario',
  templateUrl: './tipo-de-usuario.component.html',
  styleUrls: ['./tipo-de-usuario.component.css']
})
export class TipoDeUsuarioComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem("tipoUsuario")!=null) {
        this.router.navigate(['/']);
    }
  }

  crearEmpleador(){
    let usurioEmpleador ="empleador";
      localStorage.setItem("tipoUsuario",usurioEmpleador);
      this.router.navigate(['/'])
  }
  crearEmpleado(){
    let usurioEmpleado ="empleado";
    localStorage.setItem("tipoUsuario",usurioEmpleado);
    this.router.navigate(['/'])
  }
}
