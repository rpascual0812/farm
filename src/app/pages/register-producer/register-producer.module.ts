import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterProducerPageRoutingModule } from './register-producer-routing.module';

import { RegisterProducerPage } from './register-producer.page';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegisterProducerPageRoutingModule,
        HeaderModule
    ],
    declarations: [RegisterProducerPage]
})
export class RegisterProducerPageModule { }
