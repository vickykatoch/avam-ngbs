import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {HostComponent} from './components/host/host.component';
import {NumberSpinnerComponent} from './components/numberspinner/numberspinner.component';

import {StrategyBuilderComponent} from './components/strategy/strategybuilder.component';


import {GridComponent} from './components/grid/grid.component';

import {GridSettingsComponent} from './components/grid-settings/grid-settings.component';
import {GridSettingsFormComponent} from './components/grid-settings/settings-form.component';
// import {GrowlModule} from 'primeng/primeng';
import { GrowlAlertModule } from './components/growl-alert/index';


@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule, GrowlAlertModule ],
  declarations: [ 
                  AppComponent, 
                  HostComponent ,
                  NumberSpinnerComponent,
                  StrategyBuilderComponent,
                  GridComponent,
                  GridSettingsComponent,
                  GridSettingsFormComponent           
             ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
      
}