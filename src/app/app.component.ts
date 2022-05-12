import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDrawerOpen = true;

  items: any[] = [];

  constructor() {
    this.items = Array.from({ length: 25 }).map((_, i) => ({
      id: `${i + 1}`,
      label: `Label: ${i + 1}`,
      value: `Value: ${i + 1}`,
    }));
  }
}
