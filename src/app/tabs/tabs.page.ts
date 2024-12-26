import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { SqliteService } from '../services/sqlite.service';
import { SQLiteUser } from '../interfaces/sqlite-user.interface';
import { localStorageUser } from '../interfaces/localStorage-user.interface';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    public user: localStorageUser;

    constructor(
        private platform: Platform,
        private sqliteService: SqliteService
    ) {
        this.user = {
            access_token: '',
            image: '',
            first_name: '',
            last_name: '',
            role_pk: null,
            seller_pk: null,
        };
    }

    async ngOnInit() {
        this.getLocalStorageUser();
    }

    getLocalStorageUser() {
        this.user.access_token = window.localStorage.getItem('access_token') ?? '';
        this.user.image = window.localStorage.getItem('image') ?? '';
    }
}
