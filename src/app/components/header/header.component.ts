import { Component, Input, OnInit } from '@angular/core';
import * as _ from '../../utilities/globals';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    api: string = '';

    constructor() { }

    ngOnInit() {
        this.api = _.API_URL;
    }

}
