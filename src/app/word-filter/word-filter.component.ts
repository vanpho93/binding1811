import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShowMode } from '../types';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.css']
})

export class WordFilterComponent implements OnInit {
  @Output() onChangeMode = new EventEmitter<ShowMode>();
  constructor() { }

  ngOnInit() {
  }

}
