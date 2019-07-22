import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/interface/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-form-exit-client',
  templateUrl: './form-exit-client.component.html',
  styleUrls: ['./form-exit-client.component.css']
})
export class FormExitClientComponent implements OnInit {
  public client: Cliente;
  public listCustomers;
  public listCustomersUpdate ;
  // tslint:disable-next-line:variable-name
  constructor(private _ClienteService: ClienteService) { }

  ngOnInit() {
    this.getListCustomers();
  }

  getListCustomers() {
    this.listCustomers  = JSON.parse(localStorage.getItem('clientes')) || [];
  }
}
