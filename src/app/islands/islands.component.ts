import { Component, OnInit } from '@angular/core';
import { Island } from '../island';
import { ISLANDS } from '../all-islands';

@Component({
  selector: 'app-islands',
  templateUrl: './islands.component.html',
  styleUrls: ['./islands.component.css']
})
export class IslandsComponent implements OnInit {

  // island = 'St Helena';

  /*island: Island = {
    id:1,
    name: 'St Helena'
  };*/

  islands = ISLANDS;

  selectedIsland: Island;

  constructor() {}


  ngOnInit() {
  }

  onSelect(island: Island): void {
    this.selectedIsland = island;
  }
}
