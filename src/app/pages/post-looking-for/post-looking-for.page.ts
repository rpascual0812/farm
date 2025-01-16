import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-looking-for',
    templateUrl: './post-looking-for.page.html',
    styleUrls: ['./post-looking-for.page.scss'],
})
export class PostLookingForPage implements OnInit {
    user: any = {};

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
