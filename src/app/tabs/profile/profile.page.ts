import { Component, OnInit } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Router } from '@angular/router';
import * as _ from '../../utilities/globals';
import { Platform } from '@ionic/angular';
import { SqliteService } from 'src/app/services/sqlite.service';
import { Device } from '@capacitor/device';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    API: string = _.API_URL;

    sqliteUsers = [];
    accessToken: string = '';
    user: any = {};

    constructor(
        private router: Router,
        private platform: Platform,
        private sqliteService: SqliteService
    ) { }

    ngOnInit() {
        this.platform.ready().then(async () => {
            const info = await Device.getInfo();

            this.sqliteService.init();

            // bad but working for now
            setTimeout(() => {
                this.SQLiteRead();
            }, 2000);
        });
    }

    SQLiteRead() {
        this.sqliteService.read().then((users: any) => {
            this.sqliteUsers = users;
            if (users.length > 0) {
                const user_data = JSON.parse(atob(users[0].access_token.split('.')[1]));
                this.accessToken = users[0].access_token;
                // const exp = (JSON.parse(atob(users[0].access_token.split('.')[1]))).exp;

                this.fetch(user_data.sub);
            }
            else {
                this.router.navigate(['/auth/login'])
            }
        }).catch(err => {
            console.error(err);
        })
    }

    async fetch(accountPk: number) {
        const options = {
            url: this.API + `/accounts/${accountPk}`,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            }
        };

        const response: HttpResponse = await CapacitorHttp.get(options);

        const image = response.data.user.user_document.filter((doc: any) => doc.type === 'profile_photo');
        const address = response.data.user.user_addresses.length > 0 ? (response.data.user.user_addresses.length > 1 ? response.data.user.user_addresses.filter((address: any) => address.default === true) : response.data.user.user_addresses[0]) : '';

        const complete_address = address.address + ' ' + address.area.name + ' ' + address.city.name + ' ' + address.province.name;
        this.user = {
            ...response.data.user,
            image: image.length > 0 ? this.API + '/' + image[0].document.path : 'https://ionicframework.com/docs/img/demos/avatar.svg',
            address: complete_address
        };
        console.log('user', this.user);
    }
}
