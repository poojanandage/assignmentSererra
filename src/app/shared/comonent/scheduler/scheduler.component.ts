import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import { ActionEventArgs, AgendaService, DayService, DragAndDropService, EventSettingsModel, GroupModel, MonthAgendaService, MonthService, ResizeService, ScheduleComponent, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

import { timelineResourceData, resourceData } from '../datasource';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService,TimelineViewsService, AgendaService, ResizeService, DragAndDropService],
  encapsulation : ViewEncapsulation.None
})
export class SchedulerComponent {
  @ViewChild('scheduleObj')
  scheduleObj!: ScheduleComponent;
  public selectedDate: Date = new Date(2021, 11, 1);
  public workDays: number[] = [0, 1, 2, 3, 4, 5];
  public group: GroupModel = {
    resources: ['Projects', 'Categories']
  };
  public projectDataSource: Record<string, any>[] = [
    { text: 'Los Angeles', id: 1, color: '#383E50' },
    { text: 'San Diego', id: 2, color: '#383E50' },
   
  ];
  public categoryDataSource: Record<string, any>[] = [
    { text: 'Alex Anderson', id: 1, groupId: 1,color :'#E0F0FD'},
    { text: 'John Doe', id: 2, groupId: 1,color : '#E0F0FD'},
    { text: 'John Vincent', id: 3, groupId: 1, color : '#E0F0FD'},
    { text: 'Annie Leohart', id: 4, groupId: 2,color : '#E0F0FD'},
    { text: 'Levi Ackerman', id: 5, groupId: 2, color : '#E0F0FD'},
 
  ];
  public allowMultiple = true;
  public eventSettings: EventSettingsModel = {
    dataSource: extend([], resourceData.concat(timelineResourceData),null!, true) as Record<string, any>[],
  fields: {
    subject: { name: 'Subject', title: 'Title' },
    startTime: { name: 'StartTime', title: 'Start Time' },
    endTime: { name: 'EndTime', title: 'End Time' },
    description: { name: 'Description', title: 'Description' },
  
  }
}
 

  public onDataBound(args: ActionEventArgs): void {
    if (args && args.requestType === 'eventCreate') {
      const events = args.addedRecords;
      console.log(events);
      // Rest of your code...
    } else {
      const events = this.scheduleObj.getCurrentViewEvents();
      console.log(events);
      // Rest of your code...
    
    if (events) {
      events.forEach((event: Record<string, any>, index: number) => {
        const descriptions = event['description']; // Get the descriptions property from the event data
        const eventElements = this.scheduleObj.element.getElementsByClassName('e-appointment');
  
        // Apply different CSS classes based on the descriptions value
        if (descriptions === 'Default State') {
          eventElements[index].classList.add('default-state');
        } else if (descriptions === 'On Hold') {
          eventElements[index].classList.add('on-hold');
        } else if (descriptions === 'Escalated') {
          eventElements[index].classList.add('escalated');
        } else if (descriptions === 'Not Started') {
          eventElements[index].classList.add('not-started');
        }
         else if (descriptions === 'In Progress') {
          eventElements[index].classList.add('in-progress');
        }
      })
    }
  
}
}
}











