import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  searchText: any;
  p:number = 1;
  public productList: any[] = [
    {
      sku: 'SKQDS',
      name: 'Coca Cola',
      brand: 'Coca Cola',
      class: 'Soda',
      category: 'drinks',
      quantity: 10,
      unit: "Bottle",
      unitPrice: 10,
    },
    {
      sku: '2KWWDS',
      name: 'Snickers Chocolate',
      brand: 'Snickers',
      class: 'Chocolate',
      category: 'sweet, candy',
      quantity: 10,
      unit: "bar",
      unitPrice: 20,
    },
    {
      sku: 'WDFSD',
      name: 'M&M Chocolate Candies - Milk',
      brand: 'M&M',
      class: 'Chocolate',
      category: 'sweet, candies',
      quantity: 10,
      unit: "bar",
      unitPrice: 30,
    },
    {
      sku: 'EFSCS',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 40,
    },
    {
      sku: 'ADJHJS',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 50,
    },
    {
      sku: 'WRSDSA',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 60,
    },
    {
      sku: 'SSTTGF',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 100,
    },
    {
      sku: 'PJHJKS',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 90,
    },
    {
      sku: 'PPJBVK',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 100,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  key:string = 'id';
  reverse:boolean = false;
  sort(key: any){
    this.key=key;
    this.reverse =!this.reverse;
  }
}
