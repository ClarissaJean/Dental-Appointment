import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClinicinfoPage } from './clinicinfo.page';

const routes: Routes = [
  {
    path: '',
    component: ClinicinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicinfoPageRoutingModule {}
