import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Article } from 'src/app/interfaces/article.interface';

@Component({
    selector: 'app-article-modal',
    templateUrl: './article-modal.component.html',
    styleUrls: ['./article-modal.component.scss'],
})
export class ArticleModalComponent implements OnInit {
    presentingElement: any = null;
    article: Article | null = null;

    constructor(
        private modalCtrl: ModalController
    ) { }

    ngOnInit() {
        this.presentingElement = document.querySelector('.ion-page');
    }

    async openWebpage() {
        const url = this.article?.url ?? '';
        window.open(url);
        this.close();
    }

    close() {
        this.modalCtrl.dismiss(null, 'cancel');
    }
}
