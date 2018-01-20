import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() onRemove = new EventEmitter();
  toggle() {
    this.word.isMemorized = !this.word.isMemorized;
  }
  remove() {
    this.onRemove.emit(this.word);
  }
}
