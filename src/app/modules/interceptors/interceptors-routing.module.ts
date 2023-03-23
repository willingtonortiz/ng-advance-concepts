import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InterceptorsPageComponent } from './pages/interceptors-page/interceptors-page.component';

const routes: Routes = [
  {
    path: '',
    component: InterceptorsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterceptorsRoutingModule {}
