import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchedulerComponent } from './shared/comonent/scheduler/scheduler.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { HttpClientModule } from "@angular/common/http";
import { SidebarModule, ToolbarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DatepickerComponent } from './shared/comonent/datepicker/datepicker.component';
import { DashboardComponent } from './shared/comonent/dashboard/dashboard.component';
// import { DropdownComponent } from './shared/comonent/dropdown/dropdown.component';
import { CardsComponent } from './shared/comonent/cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
   
    DatepickerComponent,
    DashboardComponent,
    
    CardsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    SidebarModule,
    TextBoxModule,
    TreeViewModule,
    ToolbarModule,
    DateRangePickerModule,
    DashboardLayoutModule,
    DropDownButtonModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
