import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-producer',
    templateUrl: './register-producer.page.html',
    styleUrls: ['./register-producer.page.scss'],
})
export class RegisterProducerPage implements OnInit {
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
