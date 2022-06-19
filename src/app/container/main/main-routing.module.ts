import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'dashboard',
  loadChildren: () => import('src/app/modules/dashboard/dashboard.module').then(m => m.DashboardModule)
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'dashboard'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
