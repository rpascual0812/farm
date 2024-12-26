import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductRatePageRoutingModule } from './product-rate-routing.module';

import { ProductRatePage } from './product-rate.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { RatingsModule } from 'src/app/components/ratings/ratings.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductRatePageRoutingModule,
        HeaderModule,
        RatingsModule
    ],
    declarations: [ProductRatePage]
})
export class ProductRatePageModule { }
