import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import * as _ from '../../utilities/globals';
import { Router } from '@angular/router';

@Component({
    selector: 'app-future-crops',
    templateUrl: './future-crops.page.html',
    styleUrls: ['./future-crops.page.scss'],
})
export class FutureCropsPage implements OnInit {
    API: string = _.API_URL;

    products: any = [];

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
        this.fetch();
    }

    goToFutureCrops() {
        this.router.navigate(['/tabs/products/future_crops']);
    }

    async fetch() {
        const options = {
            url: this.API + '/products',
        };

        const response: HttpResponse = await CapacitorHttp.get(options);
        response.data.data.forEach((product: any) => {
            const image = product.user_document.filter((doc: any) => doc.type === 'profile_photo');
            this.products.push({
                name: product.name,
                quantity: product.quantity,
                measurement: product.measurement.name,
                seller_name: product.user.first_name + " " + product.user.last_name,
                image: image.length > 0 ? this.API + '/' + image[0].document.path : 'https://ionicframework.com/docs/img/demos/avatar.svg',
                address: product.seller_addresses.length > 0 ? product.seller_addresses[0].address + " " + product.seller_addresses[0].area.name : product.user_addresses[0].address + " " + product.user_addresses[0].area.name,
                date_available: product.date_available
            });
        });
    }

}
