import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HomeSliderPageModule } from 'src/app/components/home-slider/home-slider.module';
import { ArticleSliderPageModule } from 'src/app/components/article-slider/article-slider.module';
import { FutureCropsPageModule } from 'src/app/components/future-crops/future-crops.module';
import { LookingForPageModule } from 'src/app/components/looking-for/looking-for.module';
import { RatingsModule } from 'src/app/components/ratings/ratings.module';

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
        LookingForPageModule,
        RatingsModule
    ],
    declarations: [HomePage]
})
export class HomePageModule { }
