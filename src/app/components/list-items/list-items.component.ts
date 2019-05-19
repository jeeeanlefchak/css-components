import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  list = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11',
    'item 12', 'item 13', 'item 14', 'item 15', 'item 16', 'item 17', 'item 18', 'item 19', 'item 20', 'item 21', 'item 22'];

  groups: any[] = [];

  constructor() { }

  ngOnInit() {
    let obj1 = { name: 'grup 1', items: this.list };
    let obj2 = { name: 'grup 2', items: this.list };
    let obj3 = { name: 'grup 3', items: this.list };
    let obj4 = { name: 'grup 4', items: this.list };
    let obj5 = { name: 'grup 5', items: this.list };
    let obj6 = { name: 'grup 6', items: this.list };
    this.groups.push(obj1);
    this.groups.push(obj2);
    this.groups.push(obj3);
    this.groups.push(obj3);
    this.groups.push(obj4);
    this.groups.push(obj5);
    this.groups.push(obj6);
  }

}
