import { Component, OnInit } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import * as _ from '../../utilities/globals';

@Component({
    selector: 'app-looking-for',
    templateUrl: './looking-for.page.html',
    styleUrls: ['./looking-for.page.scss'],
})
export class LookingForPage implements OnInit {
    API: string = _.API_URL;
    lookingFors: any = [];

    constructor() { }

    ngOnInit() {
        this.fetch();
    }

    async fetch() {
        const options = {
            url: this.API + '/products',
            params: { 'type': 'looking_for', 'skip': '0', 'take': '10' }
        };

        const response: HttpResponse = await CapacitorHttp.get(options);
        response.data.data.forEach((product: any) => {
            this.lookingFors.push(product);
        });
    }

}
