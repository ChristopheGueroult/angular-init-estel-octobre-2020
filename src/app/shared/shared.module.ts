import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [TableauLightComponent, TotalPipe, StateDirective],
  imports: [
    CommonModule
  ],
  exports: [TableauLightComponent, TotalPipe, StateDirective]
})
export class SharedModule { }
