import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectionPageComponent } from './pages/projection-page/projection-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projection',
    pathMatch: 'full',
  },
  {
    path: 'projection',
    component: ProjectionPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentProjectionRoutingModule {}
