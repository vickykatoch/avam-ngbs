import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[
    TemplateFormComponent
  ],
  declarations: [
    TemplateFormComponent
  ]
})
export class TemplateFormModule { }
