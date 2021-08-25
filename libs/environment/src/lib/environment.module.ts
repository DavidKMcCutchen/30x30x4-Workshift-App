import { NgModule, ModuleWithProviders } from '@angular/core';
import { SHIFT_ENVIRONMENT } from './shifts.token';
import { ShiftEnvironment } from "./shifts.model";

@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: ShiftEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: SHIFT_ENVIRONMENT,
          useValue: environment

        }
      ]
    }
  }
}
