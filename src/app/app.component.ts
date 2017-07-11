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
      <tab tabTitle="ng2-apiSearch">
        <apiSearch-tab></apiSearch-tab>
      </tab>
      <tab tabTitle="ng2-familyTree">
        <familyTree-tab></familyTree-tab>
      </tab>
      <tab tabTitle="ng2-tweetbox">
        <tweetbox-tab></tweetbox-tab>
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


      // <tab tabTitle="ng2-todo">
      //   <todo-tab></todo-tab>
      // </tab>
