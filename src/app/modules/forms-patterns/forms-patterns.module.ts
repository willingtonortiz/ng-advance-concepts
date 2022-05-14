import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FormsPatternsRoutingModule } from './forms-patterns-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { LoginFormComponent, RegisterFormComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsPatternsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [LoginFormComponent, RegisterFormComponent],
})
export class FormsPatternsModule {}
