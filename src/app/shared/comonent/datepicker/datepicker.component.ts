import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DateRangePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent {
  @ViewChild('dateformat')
  public DateRangeObj!: DateRangePickerComponent;
  public format: string = 'MMMM\'\ \'dd\'\ \'yyyy';
  public startDate: Date = new Date(new Date(2021,11,1));
  public endDate: Date = new Date(new Date(2021,11,7));

  public  fields:  Object  =  {  value:  'value',  text:  'text'  };

}
