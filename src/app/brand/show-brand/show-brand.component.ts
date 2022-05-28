import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-brand',
  templateUrl: './show-brand.component.html',
  styleUrls: ['./show-brand.component.css'],
})
export class ShowBrandComponent implements OnInit {
  constructor(private service: SharedService) {}
  BrandList:any = [];

  ModalTitle:string = '';
  ActiveAddEditBrandComp:boolean = false;
  brand:any;
  
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
    this.brand = {
      Id: 0,
      Name: '',
    };
    this.ModalTitle = 'Add Brand';
    this.ActiveAddEditBrandComp = true;
    console.log(this.brand);
  }

  closeClick() {
    this.ActiveAddEditBrandComp = false;
    this.refreshList();
  }

  editClick(item: any) {
    this.brand = item;
    this.ModalTitle = 'Edit Brand';
    this.ActiveAddEditBrandComp = true;
    console.log(item);
  }

  deleteClick(item: any){
    if(confirm('Are you sure to delete this brand?')){
      this.service.deleteBrand(item.Id).subscribe(data => {
        alert(data.toString());
        this.refreshList();
      });
    }
  }

  refreshList() {
    this.service.getBrandList().subscribe((data) => {
      this.BrandList = data;
    });
  }
}
