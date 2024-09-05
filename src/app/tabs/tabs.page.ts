import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { SqliteService } from '../services/sqlite.service';
import { SQLiteUser } from '../interfaces/sqlite-user.interface';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {
    public users: SQLiteUser[];

    constructor(
        private platform: Platform,
        private sqliteService: SqliteService
    ) {
        this.users = [];
    }

    async ngOnInit() {
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
            this.users = users;
            console.log('tab users', users);
        }).catch(err => {
            console.error(err);
        })
    }
}
