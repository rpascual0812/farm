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
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
