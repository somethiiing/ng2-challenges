import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-rater',
  template: `
    <span
      *ngIf="display > 0"
      (click)="onSelect(1)"
      class="black"
      >★
    </span>
    <span
      *ngIf="display > 1"
      (click)="onSelect(2)"
      class="black"
      >★
    </span>
    <span
      *ngIf="display > 2"
      (click)="onSelect(3)"
      class="black"
      >★
    </span>
    <span
      *ngIf="display > 3"
      (click)="onSelect(4)"
      class="black"
      >★
    </span>
    <span
      *ngIf="display > 4"
      (click)="onSelect(5)"
      class="black"
      >★
    </span>
    <span
      [hidden]="display > 0"
      (click)="onSelect(1)"
      class="white"
      >☆
    </span>
    <span
      [hidden]="display > 1"
      (click)="onSelect(2)"
      class="white"
      >☆
    </span>
    <span
      [hidden]="display > 2"
      (click)="onSelect(3)"
      class="white"
      >☆
    </span>
    <span
      [hidden]="display > 3"
      (click)="onSelect(4)"
      class="white"
      >☆
    </span>
    <span
      [hidden]="display > 4"
      (click)="onSelect(5)"
      class="white"
      >☆
    </span>
  `,
  styles: ['']
})

export class StarRater {
  @Input() display = 0;
  @Output() selection = new EventEmitter();

  onSelect(num: number) {
    this.display = num;
    this.selection.emit(this.display);
  }

}
