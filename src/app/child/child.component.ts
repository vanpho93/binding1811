import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() myClickIncrease = new EventEmitter();
  @Output() myClickDescrease = new EventEmitter();
  @Output() myClickReset = new EventEmitter();
}
