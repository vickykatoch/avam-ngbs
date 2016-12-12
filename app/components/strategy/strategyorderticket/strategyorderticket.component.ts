import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'avam-strategy-order-ticket',
  templateUrl: './strategyorderticket.component.html',
  styleUrls: ['../strategy.component.css']
})
export class StrategyOrderTicketComponent implements OnInit {
  orderTicketForm : FormGroup;

  constructor(fb: FormBuilder) { 
    this.orderTicketForm = fb.group({
        market: [0, Validators.compose()],
        delta: 10,
        target:0
    });
  }

  ngOnInit() {
  }

  submit(value: any) : void {
    console.log(value);
  }
}