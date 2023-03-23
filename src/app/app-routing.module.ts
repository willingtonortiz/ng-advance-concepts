import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'forms',
    loadChildren: () =>
      import('./modules/forms-patterns/forms-patterns.module').then(
        (m) => m.FormsPatternsModule
      ),
  },
  {
    path: 'content-projection',
    loadChildren: () =>
      import('./modules/content-projection/content-projection.module').then(
        (m) => m.ContentProjectionModule
      ),
  },
  {
    path: 'interceptors',
    loadChildren: () =>
      import('./modules/interceptors/interceptors.module').then(
        (m) => m.InterceptorsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
