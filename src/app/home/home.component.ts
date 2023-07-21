import { Component } from '@angular/core';
import { AppserviceService } from '../service/appservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // pollList = []
  constructor(public getpollListservice: AppserviceService) {}
  ngOnInit() {
    this.getpollList();
  }

  ngOnChanges(){
    this.getpollList();
  }

  async getpollList() {
    this.getpollListservice.getPollList();
  
  }
}

export interface pollList {
  date: string;
  ids: string[];
  options: optionType[];
  title: string;
  _id: string;
  __v: number;
}
[];

export interface optionType {
  option: string;
  vote: number;
}
