import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProducerPagePageRoutingModule } from './producer-page-routing.module';

import { ProducerPagePage } from './producer-page.page';
import { HeaderModule } from 'src/app/components/header/header.module';

// import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
// import { IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from '@ionic/angular/standalone';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProducerPagePageRoutingModule,
        HeaderModule
    ],
    declarations: [ProducerPagePage]
})
export class ProducerPagePageModule { }
