import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ProjectionComponent } from './components/projection/projection.component';
import { ProjectionPageComponent } from './pages/projection-page/projection-page.component';

@NgModule({
  declarations: [ProjectionComponent, ProjectionPageComponent],
  imports: [CommonModule, ContentProjectionRoutingModule],
})
export class ContentProjectionModule {}
