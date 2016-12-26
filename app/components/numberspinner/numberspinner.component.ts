import { Component,Output,Input, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';

const TRSY_VALUE_TYPE : string = "TREASURY";
const DECIMAL_VALUE_TYPE : string = "DECIMAL";

@Component({
    moduleId: module.id,
    selector: 'falcon-number-spinner',
    templateUrl: 'numberspinner.component.html',
    styleUrls: ['numberspinner.component.css']
})
export class NumberSpinnerComponent implements OnChanges, OnInit {
    @Input() step: number;
    @Input() value: number;
    @Input() valueType: string;
    displayValue : string;
    trsyDecSymbol : string = "-";
    @Input() decimalPlaces: number = 0;
    @Input() isReadonly: boolean;
    @Output() moveUp : EventEmitter<any> = new  EventEmitter<any>();
    @Output() moveDown : EventEmitter<any> = new  EventEmitter<any>();

    constructor() { }

    /*************************NG-LIFECYCLE HOOKS- STARTS HERE********************************/
    ngOnInit() : void {
        if(this.value) {
            this.displayValue = this.value.toFixed(this.decimalPlaces);
        }
    }
    ngOnChanges(changes: SimpleChanges) : void {
        if(changes["value"]) {
            this.displayValue = this.value.toFixed(this.decimalPlaces);
        }
    }
    /*************************NG-LIFECYCLE HOOKS- ENDS HERE********************************/

    /*************************EVENT HANDLERS STARTS HERE********************************/
    onMoveUp(evt: any) : void {
        if(this.moveUp.observers && this.moveUp.observers.length>0) {
            this.moveUp.emit('up');
        } else {
            if(this.step) {
                this.value = this.value + this.step;
                this.displayValue = this.value.toFixed(this.decimalPlaces);
            }
        }        
    }
    onMoveDown(evt: any) : void {
        if(this.moveDown.observers && this.moveDown.observers.length>0) {
            this.moveDown.emit('up');
        } else {
            if(this.step) {
                this.value = this.value - this.step;
                this.displayValue = this.value.toFixed(this.decimalPlaces);
            }
        }    
    }
    onValueChange(evt: any) : void {
        if(this.displayValue && this.displayValue.length>0) {
            this.value = Number.parseFloat(this.displayValue);
            this.displayValue = this.value.toFixed(this.decimalPlaces);
        } else {
            this.value = undefined;
        }
    }
    onKeyPress(evt: any) : void {
        if(evt.keyCode!==46 && (evt.keyCode< 48 || evt.keyCode >57)) {
            evt.returnValue = false;
        }
    }
    /*************************EVENT HANDLERS ENDS HERE**********************************/
}