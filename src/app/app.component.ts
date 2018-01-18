import { Component } from '@angular/core';

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
  styleMemorized = { color: 'green', fontWeight: 'normal' };
  styleNotMemorized = { color: 'red', fontWeight: 'bold' };
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
