import { Injectable } from '@angular/core';
import { TipoUsuarioInterface } from '../models/tipoUsuario';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument }from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class TipoDeUsuarioService {

  usuarioCollection:AngularFirestoreCollection<TipoUsuarioInterface>;
  usuarioDoc:AngularFirestoreDocument<TipoUsuarioInterface>;
  usuarios:Observable<TipoUsuarioInterface[]>;
  usuario:Observable<TipoUsuarioInterface>;

  constructor(
    private afs:AngularFirestore){
      this.usuarioCollection = this.afs.collection('usuarios',ref=>ref);
    }

    addNewReceta(receta:TipoUsuarioInterface){
      this.usuarioCollection.add(receta);
    }


}
