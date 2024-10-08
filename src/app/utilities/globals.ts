import { HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

'use strict';

export const PRODUCTION: boolean = environment.production;
export const API_URL: string = `${environment.api}`;

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function numbersOnly(event: any) {
    const pattern = /^[0-9\-]*$/;
    if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9\-]/g, "");
    }
}

export function objectToParams(object: any) {
    let params: any;
    for (var i in object) {
        params = new HttpParams().set(i, object[i]);
    }
    return params;
}