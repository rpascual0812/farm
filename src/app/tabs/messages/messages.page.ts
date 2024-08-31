import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../store/counter/counter.actions';
@Component({
    selector: 'app-messages',
    templateUrl: './messages.page.html',
    styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
    count$: Observable<number>;

    constructor(private store: Store<{ count: number }>) {
        this.count$ = store.select('count');
    }

    ngOnInit() {
    }

    add() {
        this.store.dispatch(increment());
    }

    minus() {
        this.store.dispatch(decrement());
    }

}
