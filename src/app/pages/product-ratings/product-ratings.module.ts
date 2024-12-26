import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from 'src/app/components/header/header.module';

import { IonicModule } from '@ionic/angular';

import { ProductRatingsPageRoutingModule } from './product-ratings-routing.module';

import { ProductRatingsPage } from './product-ratings.page';
import { RatingsModule } from 'src/app/components/ratings/ratings.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductRatingsPageRoutingModule,
        HeaderModule,
        RatingsModule
    ],
    declarations: [ProductRatingsPage]
})
export class ProductRatingsPageModule { }
