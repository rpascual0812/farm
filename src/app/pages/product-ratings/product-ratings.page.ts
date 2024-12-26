import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import * as _ from '../../utilities/globals';

@Component({
    selector: 'app-product-ratings',
    templateUrl: './product-ratings.page.html',
    styleUrls: ['./product-ratings.page.scss'],
})
export class ProductRatingsPage implements OnInit {
    productId: string | null = null;
    product: any = {};
    API: string = _.API_URL;

    screen: any = {
        width: 0,
        height: 0
    }

    constructor(
        platform: Platform,
        private location: Location,
        private activatedRoute: ActivatedRoute,
    ) {
        platform.ready().then(() => {
            this.screen.width = platform.width();
            this.screen.height = platform.height();
        });

        this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        console.log(this.screen);
        this.fetch();
    }

    back() {
        this.location.back();
    }

    async fetch() {
        const options = {
            url: this.API + `/products/${this.productId}`
        };

        const response: HttpResponse = await CapacitorHttp.get(options);
        if (response.data.status == 'success') {
            this.product = response.data.data;
        }

    }

}
