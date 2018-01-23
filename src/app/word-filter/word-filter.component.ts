import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShowMode } from '../types';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.css']
})

export class WordFilterComponent implements OnInit {
  @Output() onChangeMode = new EventEmitter<ShowMode>();
  @Input() showMode: ShowMode;
  options: ShowMode[] = ['SHOW_ALL', 'SHOW_FORGOT', 'SHOW_MEMORIZED'];
  constructor() { }

  ngOnInit() {
  }
}
