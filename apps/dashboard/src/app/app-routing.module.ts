import { NgModule } from '@angular/core';
import { ShiftComponent } from './shift/shift.component';
import { LoginComponent, WildComponent } from "@work-schedule/ui-login";
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'shifts', component: ShiftComponent},
  {path: 'wild', component: WildComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'wild', pathMatch: 'full'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
