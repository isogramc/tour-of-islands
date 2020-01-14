import { Component, OnInit } from '@angular/core';
import { Island } from '../island';
import { ISLANDS } from '../all-islands';
import {
  CUSTOM_ELEMENTS_SCHEMA
} from 'ngx-onsenui';

@Component({
  selector: 'app-islands',
  template: `
    <h2>Islands</h2>
    <ul class="islands">
        <li *ngFor="let island of islands"
            [class.selected]="island === selectedIsland"
            (click)="onSelect(island)">
            <span class="badge">{{island.id}}</span> <span (click)="modal.show()"> {{island.name}} </span>
        </li>
    </ul>

  <ons-modal #modal>
    <div *ngIf="selectedIsland">
      <h2>{{selectedIsland.name | uppercase}} Details</h2>
      <div><span>id: </span>{{selectedIsland.id}}</div>
      <div>
        <label>name:
          <input [(ngModel)]="selectedIsland.name" placeholder="name"/>
        </label>
      </div>
    </div>
    <p><span (click)="modal.hide()" style="text-decoration: underline; cursor: pointer;">Click</span> to hide this modal.</p>
  </ons-modal>
  `,
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
