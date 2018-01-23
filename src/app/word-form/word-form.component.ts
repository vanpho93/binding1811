import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Word } from '../types';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css']
})
export class WordFormComponent implements OnInit {
  @Output() onAddWord = new EventEmitter<Word>();
  txtEn = '';
  txtVn = '';
  checkIsMemorized = true;
  constructor() { }

  ngOnInit() {
  }

  addWord() {
    const { txtEn, txtVn, checkIsMemorized } = this;
    const word: Word = { en: txtEn, vn: txtVn, isMemorized: checkIsMemorized };
    this.txtEn = '';
    this.txtVn = '';
    this.onAddWord.emit(word);
  }
}
