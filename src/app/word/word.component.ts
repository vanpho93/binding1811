import { Component, Input } from '@angular/core';
import { Word } from '../types';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {
  // @Input() en: string;
  // @Input() vn: string;
  @Input() word: Word;
  @Input() words: Word[];

  toggle() {
    this.word.isMemorized = !this.word.isMemorized;
  }
}
