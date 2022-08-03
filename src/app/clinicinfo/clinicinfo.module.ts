import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClinicinfoPageRoutingModule } from './clinicinfo-routing.module';

import { ClinicinfoPage } from './clinicinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClinicinfoPageRoutingModule
  ],
  declarations: [ClinicinfoPage]
})
export class ClinicinfoPageModule {}
