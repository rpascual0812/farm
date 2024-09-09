import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Platform } from '@ionic/angular';
import * as _ from '../../utilities/globals';

@Component({
    selector: 'app-product',
    templateUrl: './product.page.html',
    styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
    API: string = _.API_URL;
    sliders: any = [];
    product: any = {};

    screen: any = {
        width: 0,
        height: 0
    }

    constructor(
        private location: Location,
        platform: Platform
    ) {
        platform.ready().then(() => {
            this.screen.width = platform.width();
            this.screen.height = platform.height();
        });
    }

    ngOnInit() {
        this.sliders = [
            {
                image: this.API + '/' + 'assets/images/uploads/documents/1723885588263.d93b5158-a9a1-481e-bf07-4949e8a476c9.7743b0d9-e376-43c3-96a0-b24daedc0d23.e27743f8-23c0-47ae-9381-f829b214ac6f.633728ae79d8cffe.png'
            },
            {
                image: this.API + '/' + 'assets/images/uploads/documents/1723885588263.d93b5158-a9a1-481e-bf07-4949e8a476c9.7743b0d9-e376-43c3-96a0-b24daedc0d23.e27743f8-23c0-47ae-9381-f829b214ac6f.633728ae79d8cffe.png'
            }
        ]

        this.product.user_image = '';
    }

    back() {
        this.location.back();
    }

}
