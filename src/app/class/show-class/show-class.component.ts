import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-class',
  templateUrl: './show-class.component.html',
  styleUrls: ['./show-class.component.css']
})
export class ShowClassComponent implements OnInit {

  constructor(private service: SharedService) {}
  ClassList:any = [];

  ModalTitle:string = '';
  ActiveAddEditClassComp:boolean = false;
  class:any;
  
  searchText: any;
  p:number = 1;
  key:string = 'id';
  reverse:boolean = false;
  sort(key: any){
    this.key=key;
    this.reverse =!this.reverse;
  }

  ngOnInit(): void {
    this.refreshList();
  }

  addClick() {
    this.class = {
      Id: 0,
      Name: '',
    };
    this.ModalTitle = 'Add Class';
    this.ActiveAddEditClassComp = true;
  }

  closeClick() {
    this.ActiveAddEditClassComp = false;
    this.refreshList();
  }

  editClick(item: any) {
    this.class = item;
    this.ModalTitle = 'Edit Class';
    this.ActiveAddEditClassComp = true;
    console.log(item);
  }

  deleteClick(item: any){
    if(confirm('Are you sure to delete this class?')){
      this.service.deleteClass(item.Id).subscribe(data => {
        alert(data.toString());
        this.refreshList();
      });
    }
  }

  refreshList() {
    this.service.getClassList().subscribe((data) => {
      this.ClassList = data;
    });
  }

}
