import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GrowlModule} from 'primeng/primeng';

import { GrowlAlertComponent }   from './growl-alert.component';

@NgModule({
      imports: [CommonModule, GrowlModule],
      exports: [GrowlAlertComponent],
      declarations: [GrowlAlertComponent],
      providers: [],
})
export class GrowlAlertModule { }
