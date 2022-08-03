import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentistinfoPage } from './dentistinfo.page';

const routes: Routes = [
  {
    path: '',
    component: DentistinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentistinfoPageRoutingModule {}
