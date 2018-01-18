import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txtEn = '';
  txtVn = '';
  mode = 1;
  words: Word[] = [
    { en: 'one', vn: 'mot', isMemorized: true },
    { en: 'two', vn: 'hai', isMemorized: false },
    { en: 'three', vn: 'ba', isMemorized: true }
  ];
  styleMemorized = { color: 'green', fontWeight: 'normal' };
  styleNotMemorized = { color: 'red', fontWeight: 'bold' };

  getClasses(word: Word) {
    if (word.isMemorized) return { daNho: true, chuaNho: false };
    return { daNho: false, chuaNho: true };
  }

  addWord() {
    const word: Word = { isMemorized: false, vn: this.txtVn, en: this.txtEn };
    this.words.push(word);
    this.txtEn = '';
    this.txtVn = '';
  }

  removeWord(word: Word) {
    const index = this.words.findIndex(w => w.en === word.en);
    // const index = this.words.indexOf(word);
    this.words.splice(index, 1);
  }

  shouldShowWord(word: Word) {
    if (this.mode === 1) return true;
    if (this.mode === 2 && word.isMemorized) return true;
    return this.mode === 3 && !word.isMemorized;
  }
}

interface Word {
  en: string;
  vn: string;
  isMemorized: boolean;
}

/*
  <div>
    <h3>one</h3> //green | red
    <p>mot</p>
  </div>
*/
