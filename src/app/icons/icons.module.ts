import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { IconCloseComponent } from './icon-close/icon-close.component';



@NgModule({
  declarations: [IconDeleteComponent, IconEditComponent, IconNavComponent, IconCloseComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconDeleteComponent, IconEditComponent, IconNavComponent, IconCloseComponent]
})
export class IconsModule { }
