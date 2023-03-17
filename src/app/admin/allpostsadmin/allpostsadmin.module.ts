import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllpostsadminRoutingModule } from './allpostsadmin-routing.module';
import { AllpostsadminComponent } from './allpostsadmin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AllpostsadminComponent
  ],
  imports: [
    CommonModule,
    AllpostsadminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AllpostsadminModule { }
