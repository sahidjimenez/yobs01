import { Injectable } from '@angular/core';
import { TrabajoInterface } from '../models/trabajo';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument }from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class NuevoTrabajoService {

  trabajoCollection:AngularFirestoreCollection<TrabajoInterface>;
  trabajoDoc:AngularFirestoreDocument<TrabajoInterface>;
  trabajos:Observable<TrabajoInterface[]>;
  trabajo:Observable<TrabajoInterface>;

  constructor(
    private afs:AngularFirestore){
    this.trabajoCollection = this.afs.collection('trabajos',ref=>ref);
  }

      addNewTrabajo(trabajo:TrabajoInterface){
        this.trabajoCollection.add(trabajo);
      }

      getAllTrabajos():Observable<TrabajoInterface[]>{
        this.trabajos = this.trabajoCollection.snapshotChanges()
        .map(changes=>{
          return changes.map(action=>{
            const data = action.payload.doc.data() as TrabajoInterface;
            data.id = action.payload.doc.id;
            return data;
          });
        });
        return this.trabajos;
      }

      getOneTrabajo(idTrabajo: string){
        this.trabajoDoc = this.afs.doc<TrabajoInterface>(`trabajos/${idTrabajo}`);
        this.trabajo = this.trabajoDoc.snapshotChanges().map(action=>{
          if (action.payload.exists === false) {
              return null;

          }else{
            const data = action.payload.data() as TrabajoInterface;
            data.id = action.payload.id;
            return data;
          }
        });
        return this.trabajo;
      }

      updateTrabajo(trabajo:TrabajoInterface){
        this.trabajoDoc = this.afs.doc(`trabajos/${trabajo.id}`);
        this.trabajoDoc.update(trabajo);
      }

      deteleTrabajo(trabajo:TrabajoInterface){
        this.trabajoDoc = this.afs.doc(`trabajos/${trabajo.id}`);
        this.trabajoDoc.delete();
      }




  }
