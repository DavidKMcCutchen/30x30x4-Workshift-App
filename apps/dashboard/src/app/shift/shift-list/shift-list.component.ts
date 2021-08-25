import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Shift } from '@work-schedule/api-interfaces';

@Component({
  selector: 'work-schedule-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent {
  @Input() shifts: Shift[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
