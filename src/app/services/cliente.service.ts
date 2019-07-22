import { Injectable } from '@angular/core';
import { Cliente } from '../interface/cliente';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientCollectionName = 'customers';

  constructor(private db: AngularFirestore) { }
  public saveClient(client: Cliente) {
    return this.db.collection(this.clientCollectionName).add(client);
  }

  public getCustomers() {

     return this.db.collection(this.clientCollectionName).snapshotChanges();
    /* return this.db.collection<Cliente>(this.clientCollectionName, ref => ref.orderBy('txtName', 'asc')).get(); */
  }

}
