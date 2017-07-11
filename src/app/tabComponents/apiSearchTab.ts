import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services';

@Component({
  selector: 'apiSearch-tab',
  template: `
    <div class="mainContainer">
      <h1>Movies of 2016 Filter</h1>
      <div class="searchBar">
        <input
          [(ngModel)]="searchTerm"
          placeholder="Start typing a title..."
        >
      </div>
      <div class="dataContainer">
        <div class="dataCell" [hidden]="filterResults(data.title)" *ngFor="let data of dataArr">{{ data.title }}</div>
      </div>
    </div>
  `,
  styleUrls: ['searchTab.css']
})

export class ApiSearchTab implements OnInit {
  searchTerm = '';
  dataArr = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.getRecentMovies()
      .subscribe(data => this.dataArr = data )
  }

  filterResults(index) {
    const length = this.searchTerm.length;
    const partial = index.slice(0, length).toLowerCase();
    return this.searchTerm.toLowerCase() === partial ? false : true;
  }
}
