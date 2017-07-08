import { Component } from '@angular/core';

@Component({
  selector: 'familyTree-tab',
  template: `
    <familyTree-tree class="tree" [data]="data" ></familyTree-tree>
  `,
  styleUrls: ['./familyTreeTab.css']
})
export class FamilyTreeTab {
  title = 'app';
  data = [
    { name: 'Parent', children: [
        { name: 'Child', children: [] },
        {
          name: 'Child', children: [
            { name: 'Grand Child', children: [] },
            {
              name: 'Grand Child', children: [
                { name: 'Great Grand Child', children: [] },
                { name: 'Great Grand Child', children: [] },
                { name: 'Great Grand Child', children: [] }
              ]
            },
            { name: 'Grand Child', children: [] }
          ]
        },
        { name: 'Child', children: [
            { name: 'Grand Child', children: [] },
            {
              name: 'Grand Child', children: [
                { name: 'Great Grand Child', children: [] },
                { name: 'Great Grand Child', children: [] },
                { name: 'Great Grand Child', children: [] }
              ]
            },
            { name: 'Grand Child', children: [] }
        ] }
      ]
    }
  ]
}
