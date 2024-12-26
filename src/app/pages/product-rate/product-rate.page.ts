import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Location } from "@angular/common";

import * as _ from '../../utilities/globals';
import { SqlService } from 'src/app/services/sql.service';
import { SqliteService } from 'src/app/services/sqlite.service';

@Component({
    selector: 'app-product-rate',
    templateUrl: './product-rate.page.html',
    styleUrls: ['./product-rate.page.scss'],
})
export class ProductRatePage implements OnInit {
    productPk: string | null = null;
    NOIMAGE: string = '';
    API: string = _.API_URL;
    product: any = {};

    user: any = {};

    form: any = {
        rating: 1,
        message: 'Lorem Ipsum',
        anonymous: false,
        product_pk: null
    }

    toast: any = {
        show: false,
        message: '',
        duration: 5000
    }

    constructor(
        private location: Location,
        private activatedRoute: ActivatedRoute,
        private sql: SqlService,
        private sqlite: SqliteService
    ) {
        this.productPk = this.activatedRoute.snapshot.paramMap.get('id');
        this.NOIMAGE = this.API + '/assets/images/defaults/no-product-image.png'
    }

    ngOnInit() {
        this.form.product_pk = this.productPk;

        this.SQLiteRead();
        this.fetch();
    }

    SQLiteRead() {
        this.sqlite.read().then((users: any) => {
            this.user = users[0];
        }).catch(err => {
            console.error(err);
        })
    }

    back() {
        this.location.back();
    }

    async fetch() {
        const options = {
            url: this.API + `/products/${this.productPk}`
        };

        const response: HttpResponse = await CapacitorHttp.get(options);
        if (response.data.status == 'success') {
            this.product = response.data.data;
        }
    }

    rateChanged(ev: any) {
        this.form.rating = ev;
    }

    async save() {
        if (this.form.ratings == 0 || this.form.message.replace(/\s/g, '') == '') {
            // don't do anything
        }
        else {
            const response = await this.sql.post('/products/ratings', this.form, this.user.access_token);
            if (response.status === 'success') {
                this.toast.message = 'Thank you for rating this product.';
                this.toast.show = true;
                this.back();
            }
        }
    }
}
