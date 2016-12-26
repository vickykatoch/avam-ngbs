import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {HostComponent} from './components/host/host.component';
import {NumberSpinnerComponent} from './components/numberspinner/numberspinner.component';

import {StrategyBuilderComponent} from './components/strategy/strategybuilder.component';



@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule ],
  declarations: [ 
                  AppComponent, 
                  HostComponent ,
                  NumberSpinnerComponent,
                  StrategyBuilderComponent                
             ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
      
}