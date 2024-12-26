import { Component, OnInit } from '@angular/core';
import * as _ from '../../../utilities/globals';
import axios from 'axios';

import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';

import { SqliteService } from 'src/app/services/sqlite.service';
import { SQLiteUser } from 'src/app/interfaces/sqlite-user.interface';
import { Router } from '@angular/router';
import { localStorageUser } from 'src/app/interfaces/localStorage-user.interface';

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
        let access_token = window.localStorage.getItem('access_token');
        if (access_token) {
            // this.router.navigate(['/tabs/home']);
        }
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
                this.setLocalStorage(user);
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

    setLocalStorage(user: localStorageUser) {
        window.localStorage.setItem('access_token', user.access_token);
        window.localStorage.setItem('image', user.image);
        window.localStorage.setItem('first_name', user.first_name);
        window.localStorage.setItem('last_name', user.last_name);
        window.localStorage.setItem('role_pk', user.role_pk?.toString() ?? '');
        window.localStorage.setItem('seller_pk', user.seller_pk?.toString() ?? '');

        let access_token = window.localStorage.getItem('access_token');
        if (access_token) {
            this.router.navigate(['/tabs/home']);
        }
    }
}
