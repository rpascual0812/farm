import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';
import * as _ from '../../utilities/globals';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-future-crops',
    templateUrl: './future-crops.page.html',
    styleUrls: ['./future-crops.page.scss'],
})
export class FutureCropsPage implements OnInit {
    API: string = _.API_URL;
    year: number;
    months: any = [];

    skip: number = 0;
    take: number = 6;

    products: any = [];

    screen: any = {
        width: 0,
        height: 0
    }

    constructor(platform: Platform) {
        this.year = DateTime.now().year;

        _.MONTHS.forEach((month: string) => {
            this.months.push({
                month: month,
                selected: false,
                count: 0
            });
        });

        platform.ready().then(() => {
            this.screen.width = platform.width();
            this.screen.height = platform.height();
        });
    }

    ngOnInit() {
        setTimeout(() => {
            this.fetch();
        }, 1000);
    }

    changeDate(value: number) {
        this.year += value;

        this.fetch();
    }

    async fetch() {
        this.products = [];

        let months: any = [];
        this.months.forEach((obj: any) => {
            if (obj.selected) {
                months.push(obj.month);
            }
        });

        const options = {
            url: this.API + '/products',
            params: {
                'type': 'future_crop',
                'year': this.year.toString(),
                'months': months.join(','),
                'skip': this.skip.toString(),
                'take': this.take.toString()
            }
        };

        const response: HttpResponse = await CapacitorHttp.get(options);
        response.data.data.forEach((product: any) => {
            console.log(product);
            const user_image = product.user_document.filter((doc: any) => doc.type === 'profile_photo');
            const product_image = product.product_documents.filter((doc: any) => doc.type === 'slide');
            this.products.push({
                name: product.name,
                quantity: product.quantity,
                measurement_symbol: product.measurement.symbol,
                measurement: product.measurement.name,
                seller_name: product.user.first_name + " " + product.user.last_name,
                user_image: user_image.length > 0 ? this.API + '/' + user_image[0].document.path : 'https://ionicframework.com/docs/img/demos/avatar.svg',
                address: product.seller_addresses.length > 0 ? product.seller_addresses[0].city.name : product.user_addresses[0].city.name,
                date_available: product.date_available,
                date_created: product.date_created,
                price_from: product.price_from,
                price_to: product.price_to,
                currency_symbol: product.country.currency_symbol,
                product_image: product_image.length > 0 ? this.API + '/' + product_image[0].document.path : this.API + '/' + 'assets/images/defaults/no-product-image.png',
            });
            console.log(this.products);
        });
    }

    select(i: number) {
        this.months[i].selected = !this.months[i].selected;

        this.fetch();
    }

}
