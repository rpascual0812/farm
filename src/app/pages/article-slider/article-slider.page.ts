import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import * as _ from '../../utilities/globals';
import { Article } from 'src/app/interfaces/article.interface';
import { ModalController } from '@ionic/angular';
import { ArticleModalComponent } from './article-modal/article-modal.component';

@Component({
    selector: 'app-article-slider',
    templateUrl: './article-slider.page.html',
    styleUrls: ['./article-slider.page.scss'],
})
export class ArticleSliderPage implements OnInit {

    API: string = _.API_URL;

    articles: Article[];

    constructor(
        private modalCtrl: ModalController
    ) {
        this.articles = [];
    }

    ngOnInit() {
        this.fetch();
    }

    swiperSlideChanged(e: any) {
        console.log(e);
    }

    async fetch() {
        const options = {
            url: this.API + '/articles',
        };

        const response: HttpResponse = await CapacitorHttp.get(options);
        response.data.data.forEach((article: Article) => {
            this.articles.push({
                ...article,
                image: article.article_document ? this.API + '/' + article.article_document.document.path : '',
            });
        });
    }

    async showModal(article: Article) {
        const modal = await this.modalCtrl.create({
            component: ArticleModalComponent,
            componentProps: {
                article
            }
        });
        modal.present();
    }

}
