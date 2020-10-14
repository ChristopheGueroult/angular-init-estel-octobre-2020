import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableauLightComponent, TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [TableauLightComponent, TotalPipe]
})
export class SharedModule { }
