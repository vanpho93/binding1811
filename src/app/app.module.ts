import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordComponent } from './word/word.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { WordFilterComponent } from './word-filter/word-filter.component';
import { WordFormComponent } from './word-form/word-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    ParentComponent,
    ChildComponent,
    WordFilterComponent,
    WordFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
