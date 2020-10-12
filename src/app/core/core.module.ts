import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TextModule } from '../text/text.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModule,
    UiModule,
    TemplatesModule,
    IconsModule,
    TextModule,
    HeaderComponent,
    FooterComponent,
    NavComponent
  ]
})
export class CoreModule { }
