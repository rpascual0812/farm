import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LookingForPageRoutingModule } from './looking-for-routing.module';

import { LookingForPage } from './looking-for.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LookingForPageRoutingModule
    ],
    declarations: [LookingForPage],
    exports: [LookingForPage]
})
export class LookingForPageModule { }
