import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-interceptors-page',
  templateUrl: './interceptors-page.component.html',
  styleUrls: ['./interceptors-page.component.scss'],
})
export class InterceptorsPageComponent {
  constructor(private readonly commonService: CommonService) {}

  noAuthRequest(): void {
    this.commonService.noAuthRequest().subscribe(() => {
      console.log('noAuthRequest made');
    });
  }

  basicAuthRequest(): void {
    this.commonService.basicAuthRequest().subscribe(() => {
      console.log('basicAuthRequest made');
    });
  }

  jWTAuthRequest(): void {
    this.commonService.jwtAuthRequest().subscribe(() => {
      console.log('jwtAuthRequest made');
    });
  }
}
