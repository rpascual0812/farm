import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/components/header/header.module';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RatingsModule } from 'src/app/components/ratings/ratings.module';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductPageRoutingModule,
        HeaderModule,
        RatingsModule
    ],
    declarations: [ProductPage]
})
export class ProductPageModule { }
