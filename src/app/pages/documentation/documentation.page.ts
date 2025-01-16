import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
    selector: 'app-documentation',
    templateUrl: './documentation.page.html',
    styleUrls: ['./documentation.page.scss'],
})
export class DocumentationPage implements OnInit {

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
