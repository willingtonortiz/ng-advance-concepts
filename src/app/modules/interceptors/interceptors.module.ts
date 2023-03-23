import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { InterceptorsRoutingModule } from './interceptors-routing.module';
import { InterceptorsPageComponent } from './pages/interceptors-page/interceptors-page.component';
import { AuthInterceptor } from './utils/interceptors';
import { CommonService } from './services/common.service';

@NgModule({
  imports: [CommonModule, InterceptorsRoutingModule, HttpClientModule],
  declarations: [InterceptorsPageComponent],
  providers: [
    CommonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class InterceptorsModule {}
