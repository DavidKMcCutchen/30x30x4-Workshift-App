import { Component } from '@angular/core';

@Component({
  selector: 'work-schedule-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Work Shifts';
  links = [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'shifts', icon: 'view_list', title: 'Shifts'}
  ] 
}
