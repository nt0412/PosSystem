import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculated-page-manager',
  templateUrl: './calculated-page-manager.component.html',
  styleUrls: ['./calculated-page-manager.component.css'],
})
export class CalculatedPageManagerComponent implements OnInit {
  public tileList: any[] = [
    {
      orderNum: 1,
      name: 'M&M Chocolate',
      sku: '04122WH1',
      quantity: 3,
      unitPrice: 10,
      prePrice: 20,
    },
    {
      orderNum: 2,
      name: 'Hao Hao Noodles',
      sku: '01222SWH1',
      quantity: 4,
      unitPrice: 10,
      prePrice: 20,
    },
    {
      orderNum: 3,
      name: 'Hao Hao Noodles',
      sku: '01222SWH1',
      quantity: 1,
      unitPrice: 10,
      prePrice: 20,
    },
  ];

  decreaseQuantity(item: { quantity: number }) {
    item.quantity--;
  }

  increaseQuantity(item: { quantity: number }) {
    item.quantity++;
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.tileList, event.previousIndex, event.currentIndex);
  }

  constructor() {}

  ngOnInit(): void {}
}
