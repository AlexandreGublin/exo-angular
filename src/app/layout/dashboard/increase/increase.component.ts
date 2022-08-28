import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-increase',
  templateUrl: './increase.component.html',
  styleUrls: ['./increase.component.scss']
})
export class IncreaseComponent {

  @Output()
  parentIncrease: EventEmitter<any> = new EventEmitter();

  constructor() { }

  increase() {
    this.parentIncrease.emit();
  }
}
