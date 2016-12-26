import { Component,Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'falcon-number-spinner',
    templateUrl: 'numberspinner.component.html',
    styleUrls: ['numberspinner.component.css']
})
export class NumberSpinnerComponent  {
    step: number;
    value: number;
    isReadonly: boolean;
    @Output() moveUp : EventEmitter<any> = new  EventEmitter<any>();
    @Output() moveDown : EventEmitter<any> = new  EventEmitter<any>();

    constructor() { }

    /*************************EVENT HANDLERS STARTS HERE********************************/
    onMoveUp(evt: any) : void {
        if(this.moveUp) {
            this.moveUp.emit('up');
        }        
    }
    onMoveDown(evt: any) : void {
        if(this.moveDown) {
            this.moveDown.emit('down');
        }  
    }
    /*************************EVENT HANDLERS ENDS HERE**********************************/
}