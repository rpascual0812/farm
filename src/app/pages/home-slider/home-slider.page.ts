import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import * as _ from '../../utilities/globals';

@Component({
    selector: 'app-home-slider',
    templateUrl: './home-slider.page.html',
    styleUrls: ['./home-slider.page.scss'],
})
export class HomeSliderPage implements OnInit {

    API: string = _.API_URL;

    sliders: any = [];

    constructor() { }

    ngOnInit() {
        this.fetch();
    }

    swiperSlideChanged(e: any) {
        console.log(e);
    }

    async fetch() {
        const options = {
            url: this.API + '/sliders',
        };

        const response: HttpResponse = await CapacitorHttp.get(options);
        response.data.data.forEach((slider: any) => {
            const icon = slider.slider_document.filter((doc: any) => doc.type === 'icon');
            const image = slider.slider_document.filter((doc: any) => doc.type === 'background');

            this.sliders.push({
                title: slider.title,
                details: slider.details,
                icon: icon.length > 0 ? this.API + '/' + icon[0].document.path : null,
                image: image.length > 0 ? this.API + '/' + image[0].document.path : null,
            });
        });
    }
}
