import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./chooseadmin/chooseadmin.module').then(m => m.ChooseadminModule)
      },
      {
        path: 'chooseadmin',
        loadChildren: () => import('./chooseadmin/chooseadmin.module').then(m => m.ChooseadminModule)
      },
      {
        path: 'authorsadmin',
        loadChildren: () => import('./authorsadmin/authorsadmin.module').then(m => m.AuthorsadminModule)
      },
      {
        path: 'allpostsadmin',
        loadChildren: () => import('./allpostsadmin/allpostsadmin.module').then(m => m.AllpostsadminModule)
      },
      {
        path: '**',
        loadChildren: () => import('./chooseadmin/chooseadmin.module').then(m => m.ChooseadminModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
