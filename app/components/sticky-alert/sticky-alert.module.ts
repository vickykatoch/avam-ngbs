import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StickyAlertComponent }   from './sticky-alert.component';

@NgModule({
      imports: [
            CommonModule
      ],
      exports: [
            StickyAlertComponent
      ],
      declarations: [
            StickyAlertComponent
      ],
      providers: [],
})
export class StickyAlertModule { }
