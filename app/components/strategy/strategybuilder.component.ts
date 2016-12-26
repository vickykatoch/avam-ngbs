import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jett-strategy-builder',
    templateUrl: 'strategybuilder.component.html'
    
})
export class StrategyBuilderComponent implements OnInit {
    value: number=10;

    constructor() { }
    ngOnInit() { }

    
    onMoveUp(evt: any) : void {
        this.value = this.value + 2;
    }
    onMoveDown(evt: any) : void {
        this.value = this.value - 2;
    }
    // endregion

}