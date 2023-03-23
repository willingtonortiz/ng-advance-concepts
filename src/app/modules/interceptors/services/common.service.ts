import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';

import { USE_BASIC_AUTH, USE_JWT_AUTH } from '../utils/tokens';

@Injectable()
export class CommonService {
  constructor(private readonly httpClient: HttpClient) {}

  noAuthRequest() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1');
  }

  basicAuthRequest() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1', {
      context: new HttpContext().set(USE_BASIC_AUTH, true),
    });
  }

  jwtAuthRequest() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1', {
      context: new HttpContext().set(USE_JWT_AUTH, true),
    });
  }
}
