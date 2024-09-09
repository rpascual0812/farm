import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './ratings.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [RatingsComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [RatingsComponent]
})
export class RatingsModule { }
