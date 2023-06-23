import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit{
dataArr : any = []
  constructor(private dataService : DataService){}

  ngOnInit(): void {
    this.dataService.getApi().subscribe(res =>{
      console.log(res);
      this.dataArr = res
      
    })
  }

}
