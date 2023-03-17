import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorsadminRoutingModule } from './authorsadmin-routing.module';
import { AuthorsadminComponent } from './authorsadmin.component';
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
    AuthorsadminComponent
  ],
  imports: [
    CommonModule,
    AuthorsadminRoutingModule,
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
export class AuthorsadminModule { }
