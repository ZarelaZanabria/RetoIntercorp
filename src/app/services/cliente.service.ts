import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Cliente } from '../interface/cliente';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientCollectionName = 'customers';

  constructor(private db: AngularFirestore) {  }
  public saveClient(client: Cliente) {
    return this.db.collection(this.clientCollectionName).add(client);
  }

  public getCustomers(): Observable<firebase.firestore.QuerySnapshot> {
    return this.db.collection<Cliente>(this.clientCollectionName, ref => ref.orderBy('txtName', 'asc')).get();
  }

}
