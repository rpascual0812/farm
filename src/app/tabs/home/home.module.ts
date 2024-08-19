import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HomeSliderPageModule } from 'src/app/pages/home-slider/home-slider.module';
import { ArticleSliderPageModule } from 'src/app/pages/article-slider/article-slider.module';
import { FutureCropsPageModule } from 'src/app/pages/future-crops/future-crops.module';
import { LookingForPageModule } from 'src/app/pages/looking-for/looking-for.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        HeaderModule,
        HomeSliderPageModule,
        ArticleSliderPageModule,
        FutureCropsPageModule,
        LookingForPageModule
    ],
    declarations: [HomePage]
})
export class HomePageModule { }
