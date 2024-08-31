import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { FutureCropsPageRoutingModule } from './future-crops-routing.module';

import { FutureCropsPage } from './future-crops.page';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FutureCropsPageRoutingModule
    ],
    declarations: [FutureCropsPage],
    exports: [FutureCropsPage]
})
export class FutureCropsPageModule { }
