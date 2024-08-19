import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleSliderPage } from './article-slider.page';

const routes: Routes = [
    {
        path: '',
        component: ArticleSliderPage
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArticleSliderPageRoutingModule { }
