import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Shift } from '@work-schedule/api-interfaces';

@Component({
  selector: 'work-schedule-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.scss']
})
export class ShiftDetailsComponent {
  currentShift: Shift;
  originalTitle: string;

  @Output() save = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() form: FormGroup;

  @Input() set shift(value: Shift | null) {
    if (value) this.originalTitle = value.title;
    this.currentShift = Object.assign({}, value)
  };

  saveForm(formDirective: FormGroupDirective) {
    if (formDirective.invalid) return;
    this.save.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  };

}
