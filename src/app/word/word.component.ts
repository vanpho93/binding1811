import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Word } from '../types';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent {
  @Input() word: Word;
  @Output() onRemove = new EventEmitter<Word>();
  constructor(private wordService: WordService) {}

  toggle() {
    this.word.isMemorized = !this.word.isMemorized;
  }
  remove() {
    this.wordService.removeWord(this.word._id)
    .then(() => {
      this.onRemove.emit(this.word);
    });
  }
}
