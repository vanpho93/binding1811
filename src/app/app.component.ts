import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  txtEn = '';
  txtVn = '';
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
