import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorpageRoutingModule } from './errorpage-routing.module';
import { ErrorpageComponent } from './errorpage.component';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  declarations: [
    ErrorpageComponent
  ],
  imports: [
    CommonModule,
    ErrorpageRoutingModule,
    SharedModule
  ]
})
export class ErrorpageModule { }
