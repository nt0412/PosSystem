import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css'],
})
export class StatisticComponent implements OnInit {
  public searchText:any;
  p:number = 1;
  public taskList: any[] = [
    {
      taskId: 'wdnk24',
      taskTitle: 'Prepare order for Mr.Trí',
      taskNote: 'He will come and get this order at 17:30',
      time: '10:00',
    },
    {
      taskId: 'wdnk24',
      taskTitle: 'Prepare order for Mr.Hải',
      taskNote: 'He will come and get this order at 17:30',
      time: '14:00',
    },
    {
      taskId: 'wdnk24',
      taskTitle: 'Prepare order for Mr.Thuận',
      taskNote: 'He will come and get this order at 17:30',
      time: '14:20',
    },
    {
      taskId: 'wdnk24',
      taskTitle: 'Prepare order for Mr.Trí',
      taskNote: 'He will come and get this order at 17:30',
      time: '15:00',
    },
    {
      taskId: 'wdnk24',
      taskTitle: 'Prepare order for Mr.Thuận',
      taskNote: 'He will come and get this order at 17:30',
      time: '15:10',
    },
  ];
  public transactionList: any[] = [
    {
      transactionCode: 'WE2221sjwk',
      date: 'December 18 2022',
      time: '12:20:09',
      value: '29,009.12',
      productOrder:[
        {
          sku: 'WXD234233',
          name: 'Snickers chocolate',
          price: 100,
          quantity: 1000,
          productImg: '../../assets/images/products/2.jpg',
        },
        {
          sku: 'WDD234233',
          name: 'Snickers chocolate',
          price: 100,
          quantity: 1000,
          productImg: '../../assets/images/products/2.jpg',
        },
      ]
    },
    {
      transactionCode: '1812221sjwk',
      date: 'December 18 2022',
      time: '12:30:10',
      value: '29,009.12',
    },
    {
      transactionCode: '1812221sjwk',
      date: 'December 18 2022',
      time: '13:00:00',
      value: '29,009.12',
    },
    {
      transactionCode: 'SDSD1sjwk',
      date: 'December 18 2022',
      time: '12:20:34',
      value: '29,009.12',
    },
    {
      transactionCode: 'EEED2221sjwk',
      date: 'December 18 2022',
      time: '14:20:45',
      value: '29,009.12',
    },
    {
      transactionCode: '134221sjwk',
      date: 'December 18 2022',
      time: '16:12:29',
      value: '29,009.12',
    },
    {
      transactionCode: '1812221sjwk',
      date: 'December 18 2022',
      time: '17:28:30',
      value: '29,009.12',
    },
  ];

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
  constructor() {}

  ngOnInit(): void {}
  key:string = 'id';
  reverse:boolean = false;
  sort(key: any){
    this.key=key;
    this.reverse =!this.reverse;
  }
}
