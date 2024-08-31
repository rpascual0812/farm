import { Component, OnInit } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Router } from '@angular/router';
import * as _ from '../../utilities/globals';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    API: string = _.API_URL;

    user: any = {};

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.router.navigate(['/auth']);

        this.user = {
            pk: 3
        }
        this.fetch();
    }

    async fetch() {
        const options = {
            url: this.API + `/accounts/${this.user.pk}`
        };

        const response: HttpResponse = await CapacitorHttp.get(options);
        console.log(response.data.data);
        // response.data.data.forEach((product: any) => {
        //     const image = product.user_document.filter((doc: any) => doc.type === 'profile_photo');
        //     this.products.push({
        //         name: product.name,
        //         quantity: product.quantity,
        //         measurement: product.measurement.name,
        //         seller_name: product.user.first_name + " " + product.user.last_name,
        //         image: image.length > 0 ? this.API + '/' + image[0].document.path : 'https://ionicframework.com/docs/img/demos/avatar.svg',
        //         address: product.seller_addresses.length > 0 ? product.seller_addresses[0].address + " " + product.seller_addresses[0].area.name + ", " + product.seller_addresses[0].city.name : product.user_addresses[0].address + " " + product.user_addresses[0].area.name + ", " + product.user_addresses[0].city.name,
        //         date_available: product.date_available,
        //         date_created: product.date_created
        //     });
        // });
    }

}
