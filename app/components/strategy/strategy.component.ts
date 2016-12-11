import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'avam-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['strategy.component.css']
})
export class StrategyComponent implements OnInit {

  isOrderTicket: boolean = true;

  constructor() { }

  toggleOrderTicket(isOrderTicket: boolean) : void {
    this.isOrderTicket=isOrderTicket;
  }

  ngOnInit() {
  }

}