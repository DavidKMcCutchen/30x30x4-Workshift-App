import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnvironmentModule } from '@work-schedule/environment';
import { environment } from '../environments/environment';
import { CoreDataModule } from "@work-schedule/core-data";
import { CoreStateModule } from "@work-schedule/core-state";
import { MaterialModule } from '@work-schedule/material';
import { UiLoginModule } from '@work-schedule/ui-login';
import { ShiftComponent } from './shift/shift.component';
import { ShiftDetailsComponent } from './shift/shift-details/shift-details.component';
import { ShiftListComponent } from './shift/shift-list/shift-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ShiftComponent,
    ShiftListComponent,
    ShiftDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
