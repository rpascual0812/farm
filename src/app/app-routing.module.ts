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

];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
