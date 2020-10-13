import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui/ui.component';
import { Ui2Component } from './ui2/ui2.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UiComponent, Ui2Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [UiComponent, Ui2Component]
})
export class UiModule { }
