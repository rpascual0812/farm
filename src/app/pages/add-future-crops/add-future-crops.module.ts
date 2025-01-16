import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFutureCropsPageRoutingModule } from './add-future-crops-routing.module';

import { AddFutureCropsPage } from './add-future-crops.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFutureCropsPageRoutingModule
  ],
  declarations: [AddFutureCropsPage]
})
export class AddFutureCropsPageModule {}
