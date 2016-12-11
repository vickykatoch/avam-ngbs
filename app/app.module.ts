import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { StrategyComponent } from './components/strategy/strategy.component';

import { StrategyDefinitionComponent } from './components/strategy/strategydefinition/strategydefinition.component';
import { StrategyOrderTicketComponent } from './components/strategy/strategyorderticket/strategyorderticket.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
                  AppComponent,
                  StrategyComponent,
                  StrategyDefinitionComponent,
                  StrategyOrderTicketComponent
             ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
      
}