import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';


@Component({
    selector: 'app-producer-page',
    templateUrl: './producer-page.page.html',
    styleUrls: ['./producer-page.page.scss'],
})
export class ProducerPagePage implements OnInit {
    user: any = {};

    activeView: 'products' | 'future_crops' = 'products';

    categories: any = [
        'Recently Added',
        'Vegetables',
        'Fruits',
        'Seeds',
        'Herbs',
        'Nuts'
    ];

    constructor(
        private location: Location,
        private router: Router
    ) {
        this.user = this.router.getCurrentNavigation()?.extras.state;
    }

    ngOnInit() {
    }

    back() {
        this.location.back();
    }

    segmentChanged(event: any) {
        this.activeView = event.detail.value;
    }

    openAddProduct() {
        this.router.navigate(['/tabs/profile/add_product']);
    }

    openAddFuturCrops() {
        this.router.navigate(['/tabs/profile/add_future_crops'], { state: this.user });
    }

}
