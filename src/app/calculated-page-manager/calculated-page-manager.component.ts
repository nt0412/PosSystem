import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculated-page-manager',
  templateUrl: './calculated-page-manager.component.html',
  styleUrls: ['./calculated-page-manager.component.css'],
})
export class CalculatedPageManagerComponent implements OnInit {
  
  public productList: any[] = [
    {
      sku: 'WDD234233',
      name: 'Sea Passion nº2',
      price: 100,
      quantity: 1000,
      productImg: '../../assets/images/products/1.png',
    },
    {
      sku: 'WDD234233',
      name: 'Snickers chocolate',
      price: 100,
      quantity: 1000,
      productImg: '../../assets/images/products/2.jpg',
    },
    {
      sku: 'WDD234233',
      name: 'Lay’s potato chips Classic',
      price: 100,
      quantity: 1000,
      productImg: '../../assets/images/products/3.jpg',
    },
    {
      sku: 'WDD234233',
      name: 'Hao Hao Noodle',
      price: 100,
      quantity: 1000,
      productImg: '../../assets/images/products/4.png',
    },
    {
      sku: 'WDD234233',
      name: 'KitKat chocolate',
      price: 100,
      quantity: 1000,
      productImg: '../../assets/images/products/5.jpg',
    },
    {
      sku: 'WDD234233',
      name: 'Lay’s potato chips Wavy',
      price: 100,
      quantity: 1000,
      productImg: '../../assets/images/products/6.jpg',
    },
    {
      sku: 'WDD234233',
      name: 'Sea Passion nº2',
      price: 100,
      quantity: 1000,
      productImg: '../../assets/images/products/1.png',
    },
    {
      sku: 'WDD234233',
      name: 'Snickers chocolate',
      price: 100,
      quantity: 1000,
      productImg: '../../assets/images/products/2.jpg',
    },
  ];
  public customerBill: any[] = [
    { customerOrderNum: 1 },
    { customerOrderNum: 2 },
    { customerOrderNum: 3 },
    { customerOrderNum: 4 },
    { customerOrderNum: 5 },
    { customerOrderNum: 6 },
  ];
  public tileList: any[] = [
    {
      name: 'M&M Chocolate',
      sku: '04122WH1',
      quantity: 3,
      unitPrice: 50,
      afterPrice: 20,
    },
    {
      name: 'Hao Hao Noodles',
      sku: '01222SWH1',
      quantity: 4,
      unitPrice: 50,
      afterPrice: 20,
    },
    {
      name: 'Hao Hao Noodles',
      sku: '01222SWH1',
      quantity: 1,
      unitPrice: 50,
      afterPrice: 20,
    },
    {
      name: 'Hao Hao Noodles',
      sku: '01222SWH1',
      quantity: 1,
      unitPrice: 50,
      afterPrice: 20,
    },
  ];

  decreaseQuantity(item: { quantity: number }) {
    item.quantity--;
  }

  increaseQuantity(item: { quantity: number }) {
    item.quantity++;
  }

  deleteTile(event: CdkDragDrop<any[]>) {
    this.tileList.splice(event.currentIndex, 1);
  }


  public temporary: any = 0;
  public voucher: any[] = [
    {
      voucherID: '001',
      moneyDiscount: '10',
      validDate: '2022-01-01',
      expiredDate: '2022-04-01',
    },
    {
      voucherID: '0321',
      moneyDiscount: '10',
      validDate: '2022-01-01',
      expiredDate: '2022-04-01',
    },
  ];
  public discount: number = 0;
  public total: number = 0;
  public received: number = 0;
  public changed: number = 0;

  // changeMoney(event: any) {
  //   this.received = event.target.value;
  //   this.change = this.received - this.total;
  // }
  constructor() {}
  public name: string = 'Thuan';

  ngOnInit(): void {
    for (let i = 0; i < this.tileList.length; i++) {
      this.temporary += this.tileList[i].unitPrice*this.tileList[i].quantity;
      this.total += this.tileList[i].afterPrice*this.tileList[i].quantity - this.discount;
      this.changed = this.received - this.total;
    }
    console.log(this.received);
    
  }
}
