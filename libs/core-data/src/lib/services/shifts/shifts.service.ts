import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Shift } from "@work-schedule/api-interfaces";
import { ShiftEnvironment, SHIFT_ENVIRONMENT } from "@work-schedule/environment";


@Injectable({
  providedIn: 'root'
})
export class ShiftsService {
  model = 'shifts';

  constructor(
    private httpClient: HttpClient,
    @Inject(SHIFT_ENVIRONMENT) private environment: ShiftEnvironment
  ) {}

  all() {
    return this.httpClient.get<Shift[]>(this.getUrl())
  };

  find(shiftId: string) {
    return this.httpClient.get<Shift>(this.getUrlById(shiftId))
  };

  create(shifts: Shift) {
    return this.httpClient.post<Shift>(this.getUrl(), shifts)
  };

  update(shifts: Shift) {
    return this.httpClient.patch<Shift>(this.getUrlById(shifts.id), shifts)
  };

  delete(shiftId: string) {
    return this.httpClient.delete<Shift>(this.getUrlById(shiftId))
  };

  getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  getUrlById(id) {
    return `${this.getUrl()}/${id}`
  };
}
