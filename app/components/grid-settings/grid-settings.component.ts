import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IGridState, IGridColumn} from './model/gridState';
import { IGrowlAlertOptions } from '../growl-alert/index';
import { IMessage } from '../sticky-alert/index';

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
      message: IMessage;

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
            this.message = <IMessage> {
                  message : 'Im a Success Message',
                  type: 'success'
            };
      }

      onInfo(): void {
            this.options.api.info('Info Message', 'Info');
            // this.messages.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
            this.message = <IMessage> {
                  message : 'Im a Info Message',
                  type: 'info'
            };
      }
      onWarning(): void {
            this.options.api.warn('Warning Message', 'Warning');
            // this.messages.push({severity:'warn', summary:'Info Message', detail:'PrimeNG rocks'});
            this.message = <IMessage> {
                  message : 'Im a warning Message',
                  type: 'warn'
            };
      }
      onError(): void {
            this.options.api.error('Error Message', 'Error', true);
            this.message = <IMessage> {
                  message : 'Im a error Message',
                  type: 'error'
            };
            // this.messages.push({severity:'error', summary:'Info Message', detail:'PrimeNG rocks'});
      }
}