import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() onIncrease = new EventEmitter();
  @Output() onDescrease = new EventEmitter();
  @Output() onReset = new EventEmitter();
  increase(y) { this.onIncrease.emit(y); }
  descrease() { this.onDescrease.emit(); }
  reset() { this.onReset.emit(); }
}
