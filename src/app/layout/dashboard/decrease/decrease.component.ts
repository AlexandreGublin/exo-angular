import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-decrease',
  templateUrl: './decrease.component.html',
  styleUrls: ['./decrease.component.scss']
})
export class DecreaseComponent {

  @Output()
  parentDecrease: EventEmitter<any> = new EventEmitter();

  constructor() { }

  decrease() {
    this.parentDecrease.emit();
  }

}
