import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';
import { PostLookingForPage } from 'src/app/pages/post-looking-for/post-looking-for.page';
import { RegisterProducerPage } from 'src/app/pages/register-producer/register-producer.page';
import { RecentlyViewedPage } from 'src/app/pages/recently-viewed/recently-viewed.page';
import { ProducerPagePage } from 'src/app/pages/producer-page/producer-page.page';
import { AddProductPage } from 'src/app/pages/add-product/add-product.page';
import { AddFutureCropsPage } from 'src/app/pages/add-future-crops/add-future-crops.page';
import { FaqPage } from 'src/app/pages/faq/faq.page';
import { DocumentationPage } from 'src/app/pages/documentation/documentation.page';

const routes: Routes = [
    {
        path: '',
        component: ProfilePage
    },
    {
        path: 'post',
        component: PostLookingForPage
    },
    {
        path: 'register',
        component: RegisterProducerPage
    },
    {
        path: 'producer_page',
        component: ProducerPagePage
    },
    {
        path: 'recently_viewed',
        component: RecentlyViewedPage
    },
    {
        path: 'add_product',
        component: AddProductPage
    },
    {
        path: 'add_future_crops',
        component: AddFutureCropsPage
    },
    {
        path: 'faq',
        component: FaqPage
    },
    {
        path: 'documentation',
        component: DocumentationPage
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProfilePageRoutingModule { }
