import { Component, Input, OnInit } from '@angular/core';

enum COLORS {
    GREY = '#E0E0E0',
    GREEN = '#76ff03',
    YELLOW = '#FFCA28',
    RED = '#DD2C00'
}

@Component({
    selector: 'app-ratings',
    templateUrl: './ratings.component.html',
    styleUrls: ['./ratings.component.scss'],
})
export class RatingsComponent implements OnInit {
    @Input() rating: number;
    @Input() total: number;
    @Input() showTotal: boolean;
    @Input() zoom: number;

    constructor() {
        this.rating = 0;
        this.total = 0;
        this.showTotal = false;
        this.zoom = 1.0;
    }

    ngOnInit() { }

    setColor(i: number, rating: number) {
        if (i <= rating) {
            return COLORS.YELLOW;
        }
        else {
            return COLORS.GREY;
        }
    }

}
