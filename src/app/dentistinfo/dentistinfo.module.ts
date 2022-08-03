import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DentistinfoPageRoutingModule } from './dentistinfo-routing.module';

import { DentistinfoPage } from './dentistinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DentistinfoPageRoutingModule
  ],
  declarations: [DentistinfoPage]
})
export class DentistinfoPageModule {}
