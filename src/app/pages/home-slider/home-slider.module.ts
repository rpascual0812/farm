import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeSliderPageRoutingModule } from './home-slider-routing.module';

import { HomeSliderPage } from './home-slider.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomeSliderPageRoutingModule
    ],
    declarations: [HomeSliderPage],
    exports: [HomeSliderPage]
})
export class HomeSliderPageModule { }
