import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Tabs } from './tabs';
import { Tab } from './tab';
import { StarRater, FamilyTreeNode, FamilyTreeTree } from './components';
import { StarRaterTab, SearchTab, FamilyTreeTab, TweetboxTab } from './tabComponents';

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
    TweetboxTab
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
