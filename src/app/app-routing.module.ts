import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '@syncfusion/ej2-angular-calendars';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { DashboardComponent } from './shared/comonent/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'calender', component : ScheduleComponent
  },
  {
    path : 'home',component : DashboardComponent
  },
  {
    path : 'net',component : DashboardComponent
  },
  {
    path : 'list',component : DashboardComponent
  },
  {
    path : 'chart',component : DashboardComponent
  },
  {
    path : 'cog',component : DashboardComponent
  },
  {
    path : 'info',component : DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
