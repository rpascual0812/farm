import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsPage } from './products.page';

const routes: Routes = [
    {
        path: '',
        component: ProductsPage,
        children: [
            {
                path: 'future_crops',
                loadChildren: () => import('../../pages/future-crops/future-crops.module').then(m => m.FutureCropsPageModule)
            },
            {
                path: 'looking_for',
                loadChildren: () => import('../../pages/looking-for/looking-for.module').then(m => m.LookingForPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/products/looking_for',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProductsPageRoutingModule { }
