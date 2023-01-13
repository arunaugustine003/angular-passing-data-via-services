import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-component2',
  template: ` <button (click)="getData()">Get Data</button> 
  <h1>{{this.data}}</h1>
  `,
})
export class Component2Component {
  data: any;
  constructor(private dataService: DataService) {}
  getData() {
    this.data = this.dataService.getData();
  }
}
