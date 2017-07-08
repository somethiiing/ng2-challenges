import { Component } from '@angular/core';

@Component({
  selector: 'starRater-tab',
  template: `
    <div>
      <h1>Star Rater!</h1>
      <hr>
      <h3>Click on a star to select a rating!</h3>
      <star-rater
        (selection)="onNoDefaultRaterSelect($event)"
      ></star-rater>
      <p>The current rating is {{noDefaultRaterSelection}} out of 5.</p>
      <br>
      <br>
      <br>
      <h3>Also works with defaults!</h3>
      <star-rater
        [display]="4"
        (selection)="onWithDefaultRaterSelect($event)"
      ></star-rater>
      <p>The current rating is {{withDefaultRaterSelection}} out of 5.</p>
    </div>
  `,
  styleUrls: []

})

export class StarRaterTab {
  noDefaultRaterSelection: number = 0;
  withDefaultRaterSelection: number = 4;

  onNoDefaultRaterSelect(num: number) {
    this.noDefaultRaterSelection = num;
  }

  onWithDefaultRaterSelect(num: number) {
    this.withDefaultRaterSelection = num;
  }
}