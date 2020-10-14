import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';



@NgModule({
  declarations: [TableauLightComponent, TotalPipe, StateDirective, TableauDarkComponent],
  imports: [
    CommonModule
  ],
  exports: [TableauLightComponent, TotalPipe, StateDirective, TableauDarkComponent]
})
export class SharedModule { }
