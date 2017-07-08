import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <tabs>
      <tab tabTitle="ng2-starRater">
        <starRater-tab></starRater-tab>
      </tab>
      <tab tabTitle="ng2-search">
        <search-tab></search-tab>
      </tab>
      <tab tabTitle="ng2-familyTree">
        <familyTree-tab></familyTree-tab>
      </tab>
      <tab tabTitle="ng2-tweetbox">
        <tweetbox-tab></tweetbox-tab>
      </tab>
      <tab class="green" tabTitle="GREEN">
        <div class="green">
          <p class="greenText">GREEN!</p>
          <p>CONTENT GOES HERE</p>
        </div>
      </tab>
    </tabs>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name: string;

  constructor() {
    this.name = 'ng2-challenges'
  }

}
