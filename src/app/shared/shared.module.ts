import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickEventDirective } from './ui/directives/click-event.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ClickEventDirective],
  exports: [ClickEventDirective],
})
export class SharedModule {}
