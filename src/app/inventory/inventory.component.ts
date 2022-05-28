import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  searchText: any;
  p:number = 1;
  public productList: any[] = [  ];
  constructor() {}

  ngOnInit(): void {}

  key:string = 'id';
  reverse:boolean = false;
  sort(key: any){
    this.key=key;
    this.reverse =!this.reverse;
  }
}
