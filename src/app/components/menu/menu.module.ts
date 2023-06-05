import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { FilterByModule } from '../filter-by/filter-by.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    FilterByModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
