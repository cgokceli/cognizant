import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars?: ICar[];

  constructor(http: HttpClient) {
    http.get<ICar[]>('/warehouse/getcars').subscribe(result => {
      this.cars = result;
    }, error => console.error(error));
  }

  title = 'Warehouse.UI';
}

interface ICar {
}
