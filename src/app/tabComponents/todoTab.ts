import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-tab',
  template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator
        (submitted)="addNewNote($event)"
        >
        </note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes; let i = index"
            (checked)="onNoteChecked($event, i)"
          >
          </note-card>
        </div>
      </div>
    </div>

  `,
  styles: ['./todoTab.css']

})

export class TodoTab implements OnInit {
  notes = [];
  localStorageKey = 'ng2-todo'

  constructor() {}

  ngOnInit() {
    const data = JSON.parse(window.localStorage.getItem(this.localStorageKey));
    if (data) {
      this.notes = data;
    } else {
      window.localStorage.setItem(this.localStorageKey, JSON.stringify([]))
    }
  }

  addNewNote(note) {
    this.notes.push(note)
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(this.notes));
  }

  onNoteChecked(note, index) {
    this.notes.splice(index, 1);
    window.localStorage.setItem(this.localStorageKey, JSON.stringify(this.notes));
  }

};
