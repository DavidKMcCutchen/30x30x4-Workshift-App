import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShiftFacade } from './shifts/shifts.facade';


@NgModule({
  imports: [CommonModule],
  providers: [ShiftFacade]
})
export class CoreStateModule {}
