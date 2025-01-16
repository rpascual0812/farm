import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
    selector: 'app-faq',
    templateUrl: './faq.page.html',
    styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

    constructor(
        private location: Location,
    ) { }

    ngOnInit() {
    }

    back() {
        this.location.back();
    }

    accordionGroupChange(event: Event) {

    }

}
