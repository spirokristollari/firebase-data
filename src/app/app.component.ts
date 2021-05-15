import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employee: string;
  employeeName: string;
  employeeAge: number;
  employeeAdress: string;
  message: string;

  constructor(public crudservice: CrudService) {}

  CreateRecord() {
    let Record = {};
    Record['name'] = this.employeeName;
    Record['age'] = this.employeeAge;
    Record['adress'] = this.employeeAdress;

    this.crudservice.create_Newemployee(Record).then(res => {
      this.employeeName = "";
      this.employeeAge = undefined;
      this.employeeAdress = "";
      console.log(res);
      this.message = "Employee data is saved";
    }).catch(error => {
      console.log(error);
    });
  }
}
