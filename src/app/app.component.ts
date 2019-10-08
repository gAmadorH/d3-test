import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'd3-test';

  public donutCharts = [[{
    id: 0,
    label: 'Tablet',
    value: 20,
    color: '0C6F20',
  }, {
    id: 2,
    label: 'Smartphone',
    value: 30,
    color: '24DD4A'
  }], [{
    id: 0,
    label: 'Tablet',
    value: 20,
    color: '134F80',
  }, {
    id: 2,
    label: 'Smartphone',
    value: 30,
    color: '3AA3F9',
  }], [{
    id: 0,
    label: 'Tablet',
    value: 20,
    color: 'E99C25',
  }, {
    id: 2,
    label: 'Smartphone',
    value: 30,
    color: 'F4DE54',
  }]];
}
