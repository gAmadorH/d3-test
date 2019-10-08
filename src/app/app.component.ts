import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D3 donuts graphics';

  public chartsData = [{
    data: [{
      id: 0,
      label: "Tablet 40 % 120.000 $",
      value: 40,
      color: '1E8D1A'
    }, {
      id: 1,
      label: 'Smartphone 60 % 80.000 $',
      value: 60,
      color: '5CBA58',
    }],
    middleText: 'Revenue 200.000 $' 
  },
  {
    data: [{
      id: 0,
      label: 'Tablet 40 % 20.000 $',
      value: 40,
      color: '1F85B7'
    }, {
      id: 1,
      label: 'Smartphone 60 % 30.000 $',
      value: 60,
      color: '7AB4D1',
    }],
    middleText: 'Impresions 50.000.000 $' 
  },
  {
    data: [{
      id: 0,
      label: 'Tablet 20 % 120.000 $',
      value: 20,
      color: 'FF8400'
    }, {
      id: 1,
      label: 'Smartphone 80 % 480.000.000 $',
      value: 80,
      color: 'FFBE39',
    }],
    middleText: 'Visits 600.000.000 $' 
  }]
}
