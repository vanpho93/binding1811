import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Word } from '../types';
import { WordService } from '../word.service';

@Component({
  selector: 'app-word-form',
  templateUrl: './word-form.component.html',
  styleUrls: ['./word-form.component.css'],
  providers: [WordService]
})
export class WordFormComponent implements OnInit {
  @Output() onAddWord = new EventEmitter<Word>();
  txtEn = '';
  txtVn = '';
  checkIsMemorized = true;
  constructor(private wordService: WordService) { }

  ngOnInit() {
  }

  addWord() {
    const { txtEn, txtVn } = this;
    this.wordService.addWord(txtVn, txtEn)
    .then(word => {
      this.txtEn = '';
      this.txtVn = '';
      this.onAddWord.emit(word);
    });
  }
}
