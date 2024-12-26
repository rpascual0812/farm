import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Platform } from '@ionic/angular';
import * as _ from '../../utilities/globals';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.page.html',
    styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
    productId: string | null = null;

    API: string = _.API_URL;
    sliders: any = [];
    product: any = {};
    NOIMAGE: string = '';

    screen: any = {
        width: 0,
        height: 0
    }

    constructor(
        platform: Platform,
        private location: Location,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {
        platform.ready().then(() => {
            this.screen.width = platform.width();
            this.screen.height = platform.height();
        });

        this.productId = this.activatedRoute.snapshot.paramMap.get('id');
        this.NOIMAGE = this.API + '/assets/images/defaults/no-product-image.png'
    }

    ngOnInit() {
        this.product.user_image = '';

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

            this.product.slides = [];
            this.product.product_documents.forEach((doc: any) => {
                this.product.slides.push(this.API + '/' + doc.document.path);
            });

            this.product.seller_name = this.product.user.first_name + ' ' + this.product.user.last_name;
            this.product.address = this.product.user_addresses[0].address + " " + this.product.user_addresses[0].area.name;
            this.product.seller_address = this.product.seller_addresses.length > 0 ? this.product.seller_addresses[0].address + " " + this.product.seller_addresses[0].area.name : this.product.user_addresses[0].address + " " + this.product.user_addresses[0].area.name;

            console.log('product', this.product);
        }

    }

    goToRatings() {
        this.router.navigate(['/product/' + this.productId + '/ratings']);
    }

    rateProduct() {
        this.router.navigate(['/product/' + this.productId + '/rate']);
    }

}
