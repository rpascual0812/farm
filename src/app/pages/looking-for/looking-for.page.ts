import { Component, OnInit } from '@angular/core';
import * as _ from '../../utilities/globals';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
    selector: 'app-looking-for',
    templateUrl: './looking-for.page.html',
    styleUrls: ['./looking-for.page.scss'],
})
export class LookingForPage implements OnInit {

    API: string = _.API_URL;

    products: any = [];

    skip: number = 0;
    take: number = 6;

    screen: any = {
        width: 0,
        height: 0
    }

    constructor(platform: Platform) {
        platform.ready().then(() => {
            this.screen.width = platform.width();
            this.screen.height = platform.height();
        });
    }

    ngOnInit() {
        this.fetch();
    }

    async loadData(event: any) {
        setTimeout(() => {
            this.skip += this.take;
            this.fetch();
            event.target.complete();
        }, 500);
    }

    async fetch() {
        const options = {
            url: this.API + '/products',
            params: {
                'type': 'product,all',
                // 'orderBy': filterValue,
                // 'categoryFilter': categoryFilterValue,
                'skip': this.skip.toString(),
                'take': this.take.toString(),
            }
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
                address: product.seller_addresses.length > 0 ? product.seller_addresses[0].address + " " + product.seller_addresses[0].area.name + ", " + product.seller_addresses[0].city.name : product.user_addresses[0].address + " " + product.user_addresses[0].area.name + ", " + product.user_addresses[0].city.name,
                date_available: product.date_available,
                date_created: product.date_created
            });
        });
    }

}
