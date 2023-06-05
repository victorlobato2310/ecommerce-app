import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByComponent } from './filter-by.component';

@NgModule({
  declarations: [FilterByComponent],
  imports: [
    CommonModule
  ],
  exports: [FilterByComponent]
})
export class FilterByModule { }
