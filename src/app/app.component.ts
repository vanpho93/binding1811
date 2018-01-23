import { Component } from '@angular/core';
import { Word, ShowMode } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMode: ShowMode = 'SHOW_ALL';
  words: Word[] = [
    { en: 'one', vn: 'mot', isMemorized: true },
    { en: 'two', vn: 'hai', isMemorized: false },
    { en: 'three', vn: 'ba', isMemorized: true }
  ];

  onRemove(word: Word) {
    const index = this.words.indexOf(word);
    this.words.splice(index, 1);
  }

  onChangeMode(showMode: ShowMode) { this.showMode = showMode; }
}

/*
  <div>
    <h3>one</h3> //green | red
    <p>mot</p>
  </div>
*/
