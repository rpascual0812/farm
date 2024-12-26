import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
    @Input() allowRate: boolean;
    @Output() sendRate = new EventEmitter<number>();

    constructor() {
        this.rating = 0;
        this.total = 0;
        this.showTotal = false;
        this.zoom = 1.0;
        this.allowRate = false;
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

    setStar(i: number) {
        if (this.allowRate) {
            this.rating = i;
            this.sendRate.emit(i);
        }
    }
}
