import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseadminRoutingModule } from './chooseadmin-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import { ChooseadminComponent } from './chooseadmin.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ChooseadminComponent
  ],
  imports: [
    CommonModule,
    ChooseadminRoutingModule,
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
export class ChooseadminModule { }
