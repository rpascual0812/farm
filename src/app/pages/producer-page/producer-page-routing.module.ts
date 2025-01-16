import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProducerPagePage } from './producer-page.page';

const routes: Routes = [
    {
        path: '',
        component: ProducerPagePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ProducerPagePageRoutingModule { }
