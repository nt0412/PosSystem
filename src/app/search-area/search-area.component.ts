import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent implements OnInit {
  public searchText: any;
  constructor() { }

  ngOnInit(): void {
  }

}
