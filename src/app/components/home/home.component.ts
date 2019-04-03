import { Component, OnInit } from '@angular/core';

import { RecetaService } from '../../services/receta.service';
import { RecetaInterface} from '../../models/receta';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

recetas:RecetaInterface[];

  constructor(
    private RecetaService:RecetaService
  ) { }

  ngOnInit() {
    this.todasRecetas();
  }

  todasRecetas(){
    this.RecetaService.getAllRecetas()
    .subscribe(recetas=>this.recetas = recetas);
    
  }

}
