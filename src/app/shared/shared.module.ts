import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { ButtonComponent } from './components/button/button.component';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableauLightComponent, TotalPipe, StateDirective, TableauDarkComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TableauLightComponent,
    TotalPipe,
    StateDirective,
    TableauDarkComponent,
    TemplatesModule,
    TextModule,
    IconsModule,
    ButtonComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
// bundle phobia
