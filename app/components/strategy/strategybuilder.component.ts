import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jett-strategy-builder',
    templateUrl: 'strategybuilder.component.html'
    
})
export class StrategyBuilderComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

    // styleUrls: ['strategybuilder.component']
    // region
    onMoveUp(evt: any) : void {
        console.log('Up')
    }
    onMoveDown(evt: any) : void {
        console.log('Down')
    }
    // endregion

}