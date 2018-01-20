import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  value = 1;

  onIncrease(x) { x ? this.value += x : this.value++; }
  onDescrease() { this.value--; }
  onReset() { this.value = 1; }
}
