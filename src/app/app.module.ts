import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarRater, FamilyTreeNode, FamilyTreeTree, Tab, Tabs, NoteCard, NoteCreator, ColorPicker } from './components';
import { StarRaterTab, SearchTab, FamilyTreeTab, TweetboxTab, ApiSearchTab, TodoTab } from './tabComponents';
import { ApiService, SearchService, NotesService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    Tabs,
    Tab,
    StarRater,
    SearchTab,
    StarRaterTab,
    FamilyTreeTab,
    FamilyTreeNode,
    FamilyTreeTree,
    TweetboxTab,
    ApiSearchTab,
    NoteCard,
    NoteCreator,
    TodoTab,
    ColorPicker
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ApiService,
    SearchService,
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
