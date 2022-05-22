import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.css'],
})
export class ModalFilterComponent implements OnInit {
  public typeList: any[] = [
    {
      typeId: 1,
      typeName: 'Drinks',
      typeIcon: '../../../assets/images/type-icon/drink.svg',
    },
    {
      typeId: 2,
      typeName: 'Fruit',
      typeIcon: '../../../assets/images/type-icon/fruit.svg',
    },
    {
      typeId: 3,
      typeName: 'Chicken',
      typeIcon: '../../../assets/images/type-icon/chicken.svg',
    },
    {
      typeId: 4,
      typeName: 'coffee',
      typeIcon: '../../../assets/images/type-icon/coffee.svg',
    },
    {
      typeId: 5,
      typeName: 'snack',
      typeIcon: '../../../assets/images/type-icon/snack.svg',
    },
    {
      typeId: 6,
      typeName: 'canned',
      typeIcon: '../../../assets/images/type-icon/canned.svg',
    },
    {
      typeId: 7,
      typeName: 'fish',
      typeIcon: '../../../assets/images/type-icon/fish.svg',
    },
    {
      typeId: 2,
      typeName: 'soda',
      typeIcon: '../../../assets/images/type-icon/soda.svg',
    },
    {
      typeId: 2,
      typeName: 'meat',
      typeIcon: '../../../assets/images/type-icon/meat.svg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
