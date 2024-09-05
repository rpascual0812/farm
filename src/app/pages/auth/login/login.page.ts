import { Component, OnInit } from '@angular/core';
import * as _ from '../../../utilities/globals';
import axios from 'axios';

import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';

import { SqliteService } from 'src/app/services/sqlite.service';
import { SQLiteUser } from 'src/app/interfaces/sqlite-user.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    isWeb: boolean;
    load: boolean;

    API: string = _.API_URL;
    user: any;

    form: any = {
        username: 'email@gmail.com',
        password: 'Password1'
    }

    public users: SQLiteUser[];

    constructor(
        private router: Router,
        private platform: Platform,
        private sqliteService: SqliteService
    ) {
        this.isWeb = false;
        this.load = false;

        this.user = '';
        this.users = [];
    }

    async ngOnInit() {
        this.platform.ready().then(async () => {
            const info = await Device.getInfo();
            this.isWeb = info.platform == 'web';

            this.sqliteService.init();
            this.sqliteService.dbReady.subscribe((load: any) => {
                this.load = true;
            })

            this.load = true;

            // bad but working for now
            setTimeout(() => {
                this.SQLiteRead();
            }, 2000);
        });
    }

    async login() {
        try {
            const response = await axios(this.API + '/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json'
                },
                data: {
                    ...this.form,
                    role: 'end-user'
                }
            });

            if (response.status == 200) {
                const user = response.data.user;
                const image = user.user_document.filter((doc: any) => doc.type === 'profile_photo');
                user.image = this.API + '/' + image[0].document.path;
                this.SQLiteCreate(user);
            }

        } catch (error) {
            console.log(error);
        };
        // console.log(this.form);
        // const options = {
        //     url: this.API + '/login',
        //     data: {
        //         ...this.form,
        //         role: 'end-user'
        //     },
        //     contentType: JSON
        // };

        // const response: HttpResponse = await CapacitorHttp.post(options);
        // console.log(response);
    }

    SQLiteCreate(user: SQLiteUser) {
        this.sqliteService.create(user).then((changes) => {
            this.user = '';
            this.SQLiteRead();

            this.router.navigate(['/tabs/home'])

        }).catch(err => {
            console.error(err);
        })
    }

    SQLiteRead() {
        this.sqliteService.read().then((users: any) => {
            this.users = users;
            console.log('users', users);
        }).catch(err => {
            console.error(err);
        })
    }
}
