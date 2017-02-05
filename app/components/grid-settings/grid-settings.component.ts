import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IGridState, IGridColumn} from './model/gridState';
import { IGrowlAlertOptions } from '../growl-alert/index';

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
      options: IGrowlAlertOptions;


      constructor() { 
            this.options = <IGrowlAlertOptions>{
                  life : 2000,
                  sticky: false
            };
      }

      ngOnInit() { }

      onSaveChanges() : void {
            this.saved.emit(this.gridState);
      }
      onSuccess(): void {
            this.options.api.success('Im a Success Message', 'Success');
      }

      onInfo(): void {
            this.options.api.info('Info Message', 'Info');
            // this.messages.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
      }
      onWarning(): void {
            this.options.api.warn('Warning Message', 'Warning');
            // this.messages.push({severity:'warn', summary:'Info Message', detail:'PrimeNG rocks'});
      }
      onError(): void {
            this.options.api.error('Error Message', 'Error', true);
            // this.messages.push({severity:'error', summary:'Info Message', detail:'PrimeNG rocks'});
      }
}