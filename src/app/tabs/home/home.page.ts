import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from '../../utilities/globals';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

enum COLORS {
    GREY = '#E0E0E0',
    GREEN = '#76ff03',
    YELLOW = '#FFCA28',
    RED = '#DD2C00'
}

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    API: string = _.API_URL;

    products: any = [];
    everythingIsLoaded: boolean = false;

    sorter: any = [
        'Best Seller',
        'Newest',
        'Highest Price',
        'Lowest Price',
        'Average Rating',
        'Vegetables',
        'Fruits',
        'Seeds',
        'Herbs'
    ];

    rating: number = 0;

    skip: number = 0;
    take: number = 6;

    screen: any = {
        width: 0,
        height: 0
    }

    productsOrder: string = 'Newest';

    constructor(
        platform: Platform,
        private router: Router,
    ) {
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

    changeCategory() {
        this.skip = 0;
        this.products = [];
        this.fetch();
    }

    async fetch() {
        const options = {
            url: this.API + '/products',
            params: {
                'type': 'product,all',
                'orderBy': this.productsOrder,
                // 'categoryFilter': categoryFilterValue,
                'skip': this.skip.toString(),
                'take': this.take.toString(),
            }
        };

        const response: HttpResponse = await CapacitorHttp.get(options);
        response.data.data.forEach((product: any) => {
            const image = product.product_documents.length > 0 ? product.product_documents.filter((doc: any) => doc.default)[0] : null;
            const rating = product.product_ratings.length > 0 ? product.product_ratings.reduce((accumulator: any, current: any) => accumulator + parseFloat(current.rating), 0) / product.product_ratings.length : 0;

            this.products.push({
                ...product,
                image: image ? this.API + '/' + image.document.path : this.API + '/' + 'assets/images/defaults/no-product-image.png',
                rating: rating
            });

            if (this.products.length == response.data.total) {
                this.everythingIsLoaded = true;
            }
        });
    }

    getColor(i: number, rating: number) {
        if (i <= rating) {
            return COLORS.YELLOW;
        }
        else {
            return COLORS.GREY;
        }
    }

    goToProduct(i: number) {
        this.router.navigate([`/product/${this.products[i].pk}`]);
    }
}
