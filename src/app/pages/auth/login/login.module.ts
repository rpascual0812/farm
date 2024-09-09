import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HeaderModule } from 'src/app/components/header/header.module';

import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader';
import { HttpClient } from '@angular/common/http';

jeepSqlite(window);

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        HeaderModule
    ],
    declarations: [LoginPage],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class LoginPageModule { }
