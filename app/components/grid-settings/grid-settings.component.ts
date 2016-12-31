import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IGridState, IGridColumn} from './model/gridState';

declare var module: any;

@Component({
      moduleId: module.id,
      selector: 'grid-settings',
      templateUrl: 'grid-settings.component.html',
      styleUrls: ['grid-settings.component.css']
})
export class GridSettingsComponent implements OnInit {
      isPanelOpen: boolean;  
      @Input() gridState : IGridState; 
      @Output() saved : EventEmitter<IGridState> = new EventEmitter<IGridState>();
      
      constructor() { }

      ngOnInit() { }

      onSaveChanges() : void {
            this.saved.emit(this.gridState);
      }
}