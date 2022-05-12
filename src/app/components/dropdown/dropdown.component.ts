import { Component, Input, TemplateRef } from '@angular/core';

type Option = {
  id: string;
  label: string;
  value: any;
};

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() items: Option[] = [];
  @Input() itemTemplate?: TemplateRef<any>;

  selectOption(item: Option) {
    console.log(item);
  }
}
