import { Injectable } from '@angular/core';
import axios from 'axios';
import * as _ from '../utilities/globals';

@Injectable({
    providedIn: 'root'
})
export class SqlService {
    API: string = _.API_URL;

    async post(path: string, form: any, token: string) {
        try {
            const response = await axios(this.API + path, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                data: {
                    ...form,
                }
            });

            return response.data;
        } catch (error) {
            return error;
        };
    }
}