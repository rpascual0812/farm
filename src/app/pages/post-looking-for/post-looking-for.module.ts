import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostLookingForPageRoutingModule } from './post-looking-for-routing.module';

import { PostLookingForPage } from './post-looking-for.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PostLookingForPageRoutingModule,
        HeaderModule
    ],
    declarations: [PostLookingForPage]
})
export class PostLookingForPageModule { }
