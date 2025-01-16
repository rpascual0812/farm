import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'future-crops',
        loadChildren: () => import('./pages/future-crops/future-crops.module').then(m => m.FutureCropsPageModule)
    },
    {
        path: 'looking-for',
        loadChildren: () => import('./pages/looking-for/looking-for.module').then(m => m.LookingForPageModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule)
    },
    {
        path: 'product/:id',
        loadChildren: () => import('./pages/product/product.module').then(m => m.ProductPageModule)
    },
    {
        path: 'product/:id/ratings',
        loadChildren: () => import('./pages/product-ratings/product-ratings.module').then(m => m.ProductRatingsPageModule)
    },
    {
        path: 'product/:id/rate',
        loadChildren: () => import('./pages/product-rate/product-rate.module').then(m => m.ProductRatePageModule)
    },
    {
        path: 'post-looking-for',
        loadChildren: () => import('./pages/post-looking-for/post-looking-for.module').then(m => m.PostLookingForPageModule)
    },
    {
        path: 'register-producer',
        loadChildren: () => import('./pages/register-producer/register-producer.module').then(m => m.RegisterProducerPageModule)
    },
    {
        path: 'recently-viewed',
        loadChildren: () => import('./pages/recently-viewed/recently-viewed.module').then(m => m.RecentlyViewedPageModule)
    },
    {
        path: 'producer-page',
        loadChildren: () => import('./pages/producer-page/producer-page.module').then(m => m.ProducerPagePageModule)
    },
    {
        path: 'add-product',
        loadChildren: () => import('./pages/add-product/add-product.module').then(m => m.AddProductPageModule)
    },
    {
        path: 'add-future-crops',
        loadChildren: () => import('./pages/add-future-crops/add-future-crops.module').then(m => m.AddFutureCropsPageModule)
    },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'documentation',
    loadChildren: () => import('./pages/documentation/documentation.module').then( m => m.DocumentationPageModule)
  },

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
