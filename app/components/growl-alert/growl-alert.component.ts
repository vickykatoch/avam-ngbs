import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {IGrowlAlertOptions, IGrowlAlertApi} from './growl-alert.model';
import {Message, Growl} from 'primeng/primeng';

@Component({
      moduleId: module.id,
      selector: 'growl-alert',
      template: `<p-growl [value]="alerts" #growlNSticky></p-growl><p-growl [value]="stickyAlerts" #growlSticky [sticky]="true"></p-growl>`,
      styles : [
            `.ui-error-growl { 
                  position: fixed;
                  top: 0 !important;
                  right: 0 !important;
                  width: 100% !important;
                  }`
      ]
})
export class GrowlAlertComponent implements OnInit, IGrowlAlertApi {
      @Input() options: IGrowlAlertOptions;
      @ViewChild('growlNSticky') elem: Growl;
      @ViewChild('growlSticky') elemSticky: Growl;

      alerts: Message[] = [];
      stickyAlerts: Message[] = [];

      constructor() { }

      ngOnInit() { 
            this.options = this.options || <IGrowlAlertOptions> {
                  life: 3000,
                  sticky: false
            };
            this.options.api = this;
      }

      success(message: string, title?: string, sticky?: boolean, life?: number) : void {
            if(sticky) {
                  this.stickyAlerts.push({severity:'success', summary: title, detail: message});
            } else {
                  this.alerts.push({severity:'success', summary: title, detail: message});
            }
      }
      info(message: string, title?: string, sticky?: boolean, life?: number) : void {
            if(sticky) {
                  this.stickyAlerts.push({severity:'info', summary: title, detail: message});
            } else {
                  this.alerts.push({severity:'info', summary: title, detail: message});
            }
      }
      warn(message: string, title?: string,sticky?: boolean, life?: number) : void {
            if(sticky) {
                  this.stickyAlerts.push({severity:'warn', summary: title, detail: message});
            } else {
                  this.alerts.push({severity:'warn', summary: title, detail: message});
            }
      }
      error(message: string, title?: string, sticky?: boolean, life?: number) : void {
            if(sticky) {
                  this.stickyAlerts.push({severity:'error', summary: title, detail: message});
            } else {
                  this.alerts.push({severity:'error', summary: title, detail: message});
            }
      }
}
