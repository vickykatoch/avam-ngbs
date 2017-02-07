import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IMessage } from './sticky-alert.model';

@Component({
      moduleId: module.id,
      selector: 'sticky-alert',
      templateUrl: 'sticky-alert.component.html',
      styleUrls: ['sticky-alert.component.scss']
})
export class StickyAlertComponent implements OnInit, OnChanges {
      @Input() message                    : IMessage;
      messages                            : IMessage[] = [];
      

      constructor() { }

      ngOnInit() { 
            
      }
      ngOnChanges(changes: SimpleChanges) : void {
            if(changes["message"]) {
                  this.messages = [changes["message"].currentValue, ...this.messages ];
            }
            console.log(JSON.stringify(changes));
      }
}