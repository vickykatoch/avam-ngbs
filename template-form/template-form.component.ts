import { Component, OnInit, ViewChild } from '@angular/core';
import { IOrder } from './model';
import { NgForm, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  order: IOrder;
  
  @ViewChild('orderNumber') orderNumberField;
  @ViewChild('orderTotal') orderTotalField; 

  constructor() { 
    this.order = this.createNewOrder();
  }


  ngOnInit() {
    this.orderNumberField.control.valueChanges.subscribe((val: any)=> {
      if(val) {
        this.orderTotalField.control.updateValueAndValidity();
        (<AbstractControl>this.orderTotalField.control).markAsTouched();
      }
    });
    
   // console.log(this.orderNumberField.value);
  }

  onSubmit(form: NgForm) : void {

  }
  onReset(form: NgForm) : void {
    form.reset();
    this.order = this.createNewOrder();
  }
  createNewOrder() : IOrder {
    return <IOrder>{
      orderNumber : "",
      orderDate : new Date(),
      orderTotal : undefined
    };
  }
}
