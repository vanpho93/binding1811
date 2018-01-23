import { Component, OnInit } from '@angular/core';
import { ShowMode } from '../types';

@Component({
  selector: 'app-word-filter',
  templateUrl: './word-filter.component.html',
  styleUrls: ['./word-filter.component.css']
})
export class WordFilterComponent implements OnInit {
  showMode: ShowMode = 'SHOW_ALL';
  constructor() { }

  ngOnInit() {
  }

}
