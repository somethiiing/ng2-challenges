import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'familyTree-node',
  template: `
    <li style="">
      <a
        class="title"
        (mouseenter)="select()"
        (mouseleave)="unselect()"
        [ngClass]="{'selected': selected}">{{ data.name }}</a>
      <ul class="child"  *ngIf="data.children.length > 0">
        <li>
          <familyTree-node
            style="float:left;"
            *ngFor="let child of data.children"
            [data]="child"
            [selected]="selected"
          ></familyTree-node>
        </li>
      </ul>
    </li>
  `,
  styles: [`
    ul {
      list-style: none;
    }

    li {
      list-style: none;
    }

    .title{
      cursor: pointer;
      text-align:center;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #666;
      padding: 5px 10px;
      display: inline-block;
      font: 11px;
    }
    .selected {
      background-color: lightblue;
    }
    .child {
      border-bottom: 1px solid #ccc;
    }
  `]
})

export class FamilyTreeNode {
  @Input() selected = false;
  @Input() data: any;

  select() {
    this.selected = true;
  }

  unselect() {
    this.selected = false;
  }

}




