import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseadminComponent } from './chooseadmin.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseadminComponent
  },
  {
    path: 'chooseadmin',
    component: ChooseadminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseadminRoutingModule { }
