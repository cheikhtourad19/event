import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from './directives/highlight';

@NgModule({
  declarations: [Highlight],
  exports: [Highlight],
  imports: [CommonModule],
})
export class SharedModule {}
