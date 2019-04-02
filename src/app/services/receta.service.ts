import { Injectable } from '@angular/core';
import { RecetaInterface } from '../models/receta';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument }from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetaCollection:AngularFirestoreCollection<RecetaInterface>;
  RecetaDoc:AngularFirestoreDocument<RecetaInterface>;
  recetas:Observable<RecetaInterface[]>;
  receta:Observable<RecetaInterface>;


  constructor(
    private afs:AngularFirestore) {
      this.recetaCollection = this.afs.collection('recetas',ref=>ref);
    }

    addNewReceta(receta:RecetaInterface){
      this.recetaCollection.add(receta);
    }

    getAllRecetas():Observable<RecetaInterface[]>{
      this.recetas = this.recetaCollection.snapshotChanges()
      .map(changes=>{
        return changes.map(action=>{
          const data = action.payload.doc.data() as RecetaInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      });
      return this.recetas;
    }

    getOneReceta(idReceta: string){
      this.RecetaDoc = this.afs.doc<RecetaInterface>(`recetas/${idReceta}`);
      this.receta = this.RecetaDoc.snapshotChanges().map(action=>{
        if (action.payload.exists === false) {
            return null;
        }else{
          const data = action.payload.data() as RecetaInterface;
          data.id = action.payload.id;
          return data;
        }
      });
      return this.receta;
    }

    updateReceta(receta:RecetaInterface){
      this.RecetaDoc = this.afs.doc(`recetas/${receta.id}`);
      this.RecetaDoc.update(receta);
    }

    deteleReceta(receta:RecetaInterface){
      this.RecetaDoc = this.afs.doc(`recetas/${receta.id}`);
      this.RecetaDoc.delete();
    }

    


}
