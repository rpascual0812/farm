import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-future-crops',
    templateUrl: './add-future-crops.page.html',
    styleUrls: ['./add-future-crops.page.scss'],
})
export class AddFutureCropsPage implements OnInit {
    user: any = {};

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

    save() {

    }

}
