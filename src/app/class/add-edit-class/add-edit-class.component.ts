import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-class',
  templateUrl: './add-edit-class.component.html',
  styleUrls: ['./add-edit-class.component.css']
})
export class AddEditClassComponent implements OnInit {

  constructor(private service: SharedService) {}

  @Input() class: any;
  Id: string;
  Name: string;

  ngOnInit(): void {
    this.Id = this.class.Id;
    this.Name = this.class.Name;
  }

  addClass() {
    var val = {
      Id: this.Id,
      Name: this.Name,
    };

    console.log(val);

    this.service.addClass(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateClass() {
    var val = {
      Id: this.Id,
      Name: this.Name,
    };

    this.service.updateClass(val).subscribe((res) => {
      alert(res.toString());
    });
  }

}
