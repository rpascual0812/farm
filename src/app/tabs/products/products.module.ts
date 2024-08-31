import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from 'src/app/components/header/header.module';

import { ProductsPageRoutingModule } from './products-routing.module';

import { ProductsPage } from './products.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProductsPageRoutingModule,
        HeaderModule
    ],
    declarations: [ProductsPage]
})
export class ProductsPageModule { }
