import { Component, OnInit } from '@angular/core';

@Component({
      moduleId: module.id,
      selector: 'avam-animation',
      templateUrl: 'animation.component.html'
})
export class AnimationComponent implements OnInit {
      order: IOrder;

      constructor() { 
            this.order = <IOrder> {
                  term: "2 YEAR",
                  exch: "BSE",
                  price: 100.123,
                  bid: 99.99,
                  ask: 98.89
            }
      }

      ngOnInit() { }
}

interface IOrder {
      exch: string
      term: string;
      price: number;
      bid: number;
      ask: number;
}