import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Shift } from "@work-schedule/api-interfaces";
import { NotificationsService, ShiftsService } from "@work-schedule/core-data";
import { take, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class ShiftFacade {
    _allShiftsSource$ = new BehaviorSubject<Shift[]>([]);
    allShifts$: Observable<Shift[]> = this._allShiftsSource$.asObservable();

    private _selectedShiftSource$ = new BehaviorSubject<Shift>({} as Shift);
    selectedShift$: Observable<Shift> =
    this._selectedShiftSource$.asObservable();

    constructor(
        private shiftsService: ShiftsService,
        private notificationsService: NotificationsService
    ) {}

    loadShifts() {
        this.shiftsService
            .all()
            .pipe(
                tap((shifts) => this._allShiftsSource$.next(shifts)),
                take(1)
            )
            .subscribe()
    };

    selectShift(shiftId: string) {
        this.shiftsService
            .find(shiftId)
            .pipe(
                tap((shift) => this._selectedShiftSource$.next(shift)),
                take(1)
            )
            .subscribe()
    };

    saveShift(shift: Shift) {
        shift.id ? this.updateShift(shift) : this.createShift(shift)
    };

    createShift(shift: Shift) {
        this.shiftsService
            .create(shift)
                .pipe(
                    tap(() => {
                        this.loadShifts();
                        this.notificationsService.notify('Shift Successfully Created')
                    }),
                    take(1)
                )
                .subscribe()
    };

    updateShift(shift: Shift) {
        this.shiftsService
            .update(shift)
                .pipe(
                    tap(() => {
                        this.loadShifts();
                        this.notificationsService.notify('Shift Successfully Updated')
                    }),
                    take(1)
                )
                .subscribe()
    };

    deleteShift(shiftId: string) {
        this.shiftsService
            .delete(shiftId)
                .pipe(
                    tap(() => {
                        this.loadShifts();
                        this.notificationsService.notify('Shift Successfully Deleted')
                    }),
                    take(1)
                )
                .subscribe()
    }
}