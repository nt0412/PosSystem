import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  searchText: any;
  public productList: any[] = [
    {
      sku: '123',
      name: 'Product 1',
      brand: 'Brand 1',
      class: 'Class 1',
      category: 'Category 1',
      quantity: 10,
      unit: "Kg",
      unitPrice: 100,
    },
    {
      sku: '1234',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 100,
    },
    {
      sku: '1234',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 100,
    },
    {
      sku: '1234',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 100,
    },
    {
      sku: '1234',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 100,
    },
    {
      sku: '1234',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 100,
    },
    {
      sku: '1234',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 100,
    },
    {
      sku: '1234',
      name: 'Product 2',
      brand: 'Brand 2',
      class: 'Class 2',
      category: 'Category 2',
      quantity: 10,
      unit: "bar",
      unitPrice: 100,
    },
    {
      sku: '1234',
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
}
