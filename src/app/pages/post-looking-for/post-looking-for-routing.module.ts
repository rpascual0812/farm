import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostLookingForPage } from './post-looking-for.page';

const routes: Routes = [
  {
    path: '',
    component: PostLookingForPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostLookingForPageRoutingModule {}
