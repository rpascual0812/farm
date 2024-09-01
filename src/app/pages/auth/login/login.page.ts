import { Component, OnInit } from '@angular/core';
import * as _ from '../../../utilities/globals';
import axios from 'axios';
import { StorageService } from 'src/app/services/storage.service';
import { Platform } from '@ionic/angular';
import { Device } from '@capacitor/device';
import { SqliteService } from 'src/app/services/sqlite.service';
import { SQLiteUser } from 'src/app/interfaces/sqlite-user.interface';

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
        private platform: Platform,
        private sqliteService: SqliteService,
        private storageService: StorageService,
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

            this.SQLiteRead();
        });

        // this.getStorage();


    }

    // async getStorage() {
    //     this.user = await this.storageService.get('user');
    //     console.log('Logged user', this.user);
    // }


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

                this.SQLiteCreate(user);
                // this.storageService.set('user', JSON.stringify(user));
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

    // addToStorage() {
    //     this.storageService.set('user', "Rafael Pascual");
    //     this.getStorage();
    // }







    SQLiteCreate(user: SQLiteUser) {
        this.sqliteService.create(user).then((changes) => {
            this.user = '';
            this.SQLiteRead();
        }).catch(err => {
            console.error(err);
        })
    }

    SQLiteRead() {
        this.sqliteService.read().then((users: any) => {
            this.users = users;
        }).catch(err => {
            console.error(err);
        })
    }

    // update(user: string) {
    //     // Actualizamos el elemento (user) por el nuevo elemento (this.user)
    //     this.sqliteService.update(this.user.toUpperCase(), user).then((changes) => {
    //         console.log(changes);
    //         console.log("Actualizado");
    //         this.user = '';
    //         this.read(); // Volvemos a leer
    //     }).catch(err => {
    //         console.error(err);
    //         console.error("Error al actualizar");
    //     })
    // }

    // delete(user: string) {
    //     // Borramos el elemento
    //     this.sqliteService.delete(user).then((changes) => {
    //         console.log(changes);
    //         console.log("Borrado");
    //         this.read(); // Volvemos a leer
    //     }).catch(err => {
    //         console.error(err);
    //         console.error("Error al borrar");
    //     })
    // }

}
