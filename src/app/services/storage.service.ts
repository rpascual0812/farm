import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private _storage: Storage | null = null;

    constructor(private storage: Storage) {
        this.init();
    }

    async init() {
        const storage = await this.storage.create();
        this._storage = storage;
    }

    public async get(key: string) {
        let result = await this._storage?.get(key);
        console.log('get', key, result);
        return result;
    }

    public async set(key: string, value: any) {
        console.log('storage set', key, value);
        await this._storage?.set(key, value);
    }
}