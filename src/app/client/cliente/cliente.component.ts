import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interface/cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  // tslint:disable-next-line:semicolon
  public formClient: FormGroup;
  public formClientOuput: FormGroup;
  public client: Cliente;
  public listCustomers: Cliente[] = [];
  // tslint:disable-next-line:variable-name
  constructor(private formBuilder: FormBuilder, private _ClienteService: ClienteService) { }

  ngOnInit() {
    this.formClient = this.formBuilder.group({
      txtName: ['', Validators.required],
      txtLastName: ['', Validators.required],
      txtAge: ['', Validators.required],
      txtBirthdate: ['', Validators.required],
    });

    this.formClientOuput = this.formBuilder.group({
      txtAverage: '',
      txtStandardDeviation: ''
    });
    this.getListCustomers();
  }


  saveClient() {
    if (this.formClient.invalid) {
      return;
    }
    this.client = this.formClient.value;
    this._ClienteService.saveTodo(this.client).then(resp => {
      console.log(resp);
    }).catch(err => console.error(err));
    this.getListCustomers();
    this.formClient.reset();
  }

  getListCustomers() {
    this._ClienteService.getCustomers().subscribe(response => {
      this.listCustomers = [];
      response.docs.forEach(item => {
        const data = item.data();
        const ids = item.id;
        const listClient: Cliente = {
          id: ids,
          name: data.txtName,
          lastName: data.txtLastName,
          age: data.txtAge,
          birthdate: data.txtBirthdate,
        };
        this.listCustomers.push(listClient);
      });
      this.calculateAverage(this.listCustomers);
      localStorage.setItem('clientes', JSON.stringify(this.listCustomers));
    });
  }

  calculateAverage(arr) {

    const sumaAge = arr.reduce((a, b) => ({ age: a.age + b.age }), { age: 0 });
    const average = sumaAge.age / arr.length;
    // tslint:disable-next-line:no-string-literal
    this.formClientOuput.controls['txtAverage'].setValue(average);
    this.StandardDeviation(arr, average);
  }


  StandardDeviation(arr, average) {
    let standardDeviation = 0;
    let suma = 0;
    arr.forEach(element => {
      return suma = suma + Math.pow((Math.abs(element.age - average)), 2);
    });
    standardDeviation = Math.sqrt(suma / arr.length);
    // tslint:disable-next-line:no-string-literal
    this.formClientOuput.controls['txtStandardDeviation'].setValue(standardDeviation);
  }


}



