import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorSQLite, capSQLiteChanges, capSQLiteValues } from '@capacitor-community/sqlite';
import { Device } from '@capacitor/device';
import { Preferences } from '@capacitor/preferences';
import { JsonSQLite } from 'jeep-sqlite/dist/types/interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';
import { SQLiteUser } from '../interfaces/sqlite-user.interface';

@Injectable({
    providedIn: 'root'
})
export class SqliteService {
    public dbReady: BehaviorSubject<boolean>;
    public isWeb: boolean;
    public isIOS: boolean;
    public dbName: string;

    constructor(
        private http: HttpClient
    ) {
        this.dbReady = new BehaviorSubject(false);
        this.isWeb = false;
        this.isIOS = false;
        this.dbName = 'lambo_farm_v2.db';
    }

    async init() {

        const info = await Device.getInfo();
        const sqlite = CapacitorSQLite as any;

        // In android, need permission to work
        if (info.platform == 'android') {
            try {
                await sqlite.requestPermissions();
            } catch (error) {
                console.error("No permission")
            }
        } else if (info.platform == 'web') {
            this.isWeb = true;
            await sqlite.initWebStore();
        } else if (info.platform == 'ios') {
            this.isIOS = true;
        }

        this.setupDatabase();
    }

    async setupDatabase() {
        const dbSetup = await Preferences.get({ key: 'first_load' })
        if (!dbSetup.value) {
            this.downloadDatabase();
        } else {
            this.dbName = await this.getDbName();

            await CapacitorSQLite.createConnection({ database: this.dbName });
            await CapacitorSQLite.open({ database: this.dbName })
            this.dbReady.next(true);
        }
    }

    downloadDatabase() {
        this.http.get('assets/db/db.json').subscribe(async (jsonExport: any) => {
            const jsonstring = JSON.stringify(jsonExport);
            const isValid = await CapacitorSQLite.isJsonValid({ jsonstring });
            if (isValid.result) {
                this.dbName = jsonExport.database;

                await CapacitorSQLite.importFromJson({ jsonstring });
                await CapacitorSQLite.createConnection({ database: this.dbName });
                await CapacitorSQLite.open({ database: this.dbName })

                await Preferences.set({ key: 'first_load', value: '1' })
                await Preferences.set({ key: 'dbname', value: this.dbName })

                this.dbReady.next(true);
            }
        })

    }

    async getDbName() {
        if (!this.dbName) {
            const dbname = await Preferences.get({ key: 'dbname' })
            if (dbname.value) {
                this.dbName = dbname.value
            }
        }
        return this.dbName;
    }

    async create(user: SQLiteUser) {
        this.delete(user.username);

        let sql = 'INSERT INTO users(access_token,country_pk,expiration,first_name,last_name,middle_name,role_pk,seller_pk,username) VALUES(?,?,?,?,?,?,?,?,?);';
        const dbName = await this.getDbName();
        return CapacitorSQLite.executeSet({
            database: dbName,
            set: [
                {
                    statement: sql,
                    values: [
                        user.access_token,
                        Number(user.country_pk),
                        user.expiration,
                        user.first_name,
                        user.last_name,
                        user.middle_name,
                        Number(user.role_pk),
                        Number(user.seller_pk),
                        user.username
                    ]
                }
            ]
        }).then((changes: capSQLiteChanges) => {
            if (this.isWeb) {
                CapacitorSQLite.saveToStore({ database: dbName });
            }
            return changes;
        }).catch(err => Promise.reject(err))
    }

    async read() {
        let sql = 'SELECT access_token, country_pk, expiration, first_name, last_name, middle_name, role_pk, seller_pk, username FROM users';
        const dbName = await this.getDbName();
        return CapacitorSQLite.query({
            database: dbName,
            statement: sql,
            values: []
        }).then((response: capSQLiteValues) => {
            let users: SQLiteUser[] = [];

            if (this.isIOS && response.values!.length > 0) {
                response.values!.shift();
            }

            for (let index = 0; index < response.values!.length; index++) {
                const language = response.values![index];
                users.push(language);
            }
            return users;

        }).catch(err => Promise.reject(err))
    }

    // async update(newLanguage: string, originalLanguage: string) {
    //     let sql = 'UPDATE languages SET name=? WHERE name=?';
    //     const dbName = await this.getDbName();
    //     return CapacitorSQLite.executeSet({
    //         database: dbName,
    //         set: [
    //             {
    //                 statement: sql,
    //                 values: [
    //                     newLanguage,
    //                     originalLanguage
    //                 ]
    //             }
    //         ]
    //     }).then((changes: capSQLiteChanges) => {
    //         if (this.isWeb) {
    //             CapacitorSQLite.saveToStore({ database: dbName });
    //         }
    //         return changes;
    //     }).catch(err => Promise.reject(err))
    // }

    async delete(username: string) {
        let sql = 'DELETE FROM users WHERE username=?';
        const dbName = await this.getDbName();
        return CapacitorSQLite.executeSet({
            database: dbName,
            set: [
                {
                    statement: sql,
                    values: [
                        username
                    ]
                }
            ]
        }).then((changes: capSQLiteChanges) => {
            if (this.isWeb) {
                CapacitorSQLite.saveToStore({ database: dbName });
            }
            return changes;
        }).catch(err => Promise.reject(err))
    }
}