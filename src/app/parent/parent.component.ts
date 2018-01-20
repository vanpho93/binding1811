import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent {
  value = 1;

  increase() { this.value++; }
  descrease() { this.value--; }
  reset() { this.value = 1; }
}
