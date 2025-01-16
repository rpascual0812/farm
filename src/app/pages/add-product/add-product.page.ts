import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.page.html',
    styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

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
    ) { }

    ngOnInit() {
    }

    back() {
        this.location.back();
    }

    save() {

    }

}
