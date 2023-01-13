import { Component } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-component1',
  template: '<button (click)="sendData()">Send Data</button>'
})
export class Component1Component {
  constructor(private dataService: DataService) { }

  sendData() {
    this.dataService.setData('This Data was passed from Component 1');
  }
}
