import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
   // Sidebar data
   public target: string = '#target';
   public enableDock: boolean = true;
   public type: string = 'Over';
   public dockSize: string = '60px';
   public closeOnDocumentClick: boolean = true;
   public expond : boolean =true;
}
