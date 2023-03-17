import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllpostsadminComponent } from './allpostsadmin.component';

const routes: Routes = [
  {
    path: '',
    component: AllpostsadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllpostsadminRoutingModule { }
