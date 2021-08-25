import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shift, emptyShift } from '@work-schedule/api-interfaces';
import { ShiftFacade } from '@work-schedule/core-state';
import { Observable } from 'rxjs';


@Component({
  selector: 'work-schedule-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.scss']
})
export class ShiftComponent implements OnInit {
  shifts$: Observable<Shift[]> = this.shiftFacade.allShifts$;
  selectedShift$: Observable<Shift> = this.shiftFacade.selectedShift$;

  form: FormGroup;

  constructor(
    private shiftFacade: ShiftFacade,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.reset();
    this.shiftFacade.loadShifts();
  };

  selectedShift(shift: Shift) {
    this.shiftFacade.selectShift(shift.id);
    this.form.patchValue(shift);
  };

  reset() {
    this.selectedShift(emptyShift);
    this.form.reset();
  };

  createShift(shift: Shift) {
    this.shiftFacade.createShift(shift);
    this.form.reset();
  };

  updateShift(shift: Shift) {
    this.shiftFacade.updateShift(shift);
    this.form.reset();
  };

  saveShift(shift: Shift) {
    shift.id
    ? this.shiftFacade.updateShift(shift)
    : this.shiftFacade.createShift(shift);
  };

  deleteShift(shiftId: string) {
    this.shiftFacade.deleteShift(shiftId);
    this.form.reset();
  };

  cancel() {
    this.reset();
  };

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      specialPay: ['']
    })
  }



}
