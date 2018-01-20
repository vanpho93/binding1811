import { Component } from '@angular/core';
import { Word } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  words: Word[] = [
    { en: 'one', vn: 'mot', isMemorized: true },
    { en: 'two', vn: 'hai', isMemorized: false },
    { en: 'three', vn: 'ba', isMemorized: true }
  ];
}

/*
  <div>
    <h3>one</h3> //green | red
    <p>mot</p>
  </div>
*/
