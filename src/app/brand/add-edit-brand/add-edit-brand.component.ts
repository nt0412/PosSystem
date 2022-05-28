import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-brand',
  templateUrl: './add-edit-brand.component.html',
  styleUrls: ['./add-edit-brand.component.css'],
})
export class AddEditBrandComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() brand: any;
  Id: string;
  Name: string;

  ngOnInit(): void {
    this.Id = this.brand.Id;
    this.Name = this.brand.Name;
  }

  addBrand() {
    var val = {
      Id: this.Id,
      Name: this.Name,
    };

    this.service.addBrand(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateBrand() {
    var val = {
      Id: this.Id,
      Name: this.Name,
    };

    this.service.updateBrand(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}
