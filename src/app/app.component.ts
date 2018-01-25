import { Component } from '@angular/core';
import { Word, ShowMode } from './types';
import { WordService } from './word.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WordService]
})
export class AppComponent {
  showMode: ShowMode = 'SHOW_ALL';
  words: Word[] = [];

  constructor(private wordSerivce: WordService) {
    this.wordSerivce.getAllWords()
    .then(words => this.words = words);
  }

  get filteredWords() {
    return this.words.filter(word => {
      if (this.showMode === 'SHOW_ALL') return true;
      if (this.showMode === 'SHOW_MEMORIZED') return word.isMemorized;
      return !word.isMemorized;
    });
  }

  onRemove(word: Word) {
    const index = this.words.indexOf(word);
    this.words.splice(index, 1);
  }

  onChangeMode(showMode: ShowMode) { this.showMode = showMode; }

  onAddWord(word: Word) {
    this.words.unshift(word);
  }
}

/*
  <div>
    <h3>one</h3> //green | red
    <p>mot</p>
  </div>
*/
