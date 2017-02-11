import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent }   from './custom-input.component';



@NgModule({
      imports: [
            CommonModule,
            FormsModule
      ],
      exports: [
            CustomInputComponent
      ],
      declarations: [CustomInputComponent],
      providers: [],
})
export class CustomInputModule { }
