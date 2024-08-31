import { Component, OnInit } from '@angular/core';
import * as _ from '../../../utilities/globals';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import axios from 'axios';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    API: string = _.API_URL;

    form: any = {
        username: 'email@gmail.com',
        password: 'Password1'
    }

    constructor() { }

    ngOnInit() {
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

            console.log(response.data);

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

}
