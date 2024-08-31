import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleSliderPageRoutingModule } from './article-slider-routing.module';

import { ArticleSliderPage } from './article-slider.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArticleModalComponent } from './article-modal/article-modal.component';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ArticleSliderPageRoutingModule
    ],
    declarations: [ArticleSliderPage, ArticleModalComponent],
    exports: [ArticleSliderPage]
})
export class ArticleSliderPageModule { }
