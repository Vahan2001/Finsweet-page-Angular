import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsadminComponent } from './authorsadmin.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorsadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsadminRoutingModule { }
