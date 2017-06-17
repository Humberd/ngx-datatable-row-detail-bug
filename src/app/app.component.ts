import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("expandableTable") expandableTable: any;

  cities = [{
    name: "New York"
  }, {
    name: "Chicago"
  }, {
    name: "Boston"
  }, {
    name: "Paris"
  }, {
    name: "Barcelona"
  }, {
    name: "Madrid"
  }];

  constructor() {

  }

  public toggle(row) {
    this.expandableTable.rowDetail.toggleExpandRow(row);
  }
}
