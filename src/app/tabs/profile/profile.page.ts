import { Component, OnInit } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import * as _ from '../../utilities/globals';
import { Platform } from '@ionic/angular';
import { SqliteService } from 'src/app/services/sqlite.service';
import { Device } from '@capacitor/device';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
    API: string = _.API_URL;

    sqliteUsers = [];
    accessToken: string = '';
    user: any = {};

    isFeedbackModalOpen = false;
    isComplaintModalOpen = false;

    constructor(
        private router: Router,
        private platform: Platform,
        private location: Location,
        private sqliteService: SqliteService
    ) { }

    ngOnInit() {
        this.getLocalStorageUser();
    }

    getLocalStorageUser() {
        this.accessToken = window.localStorage.getItem('access_token') ?? '';
        if (this.accessToken) {
            const user_data = JSON.parse(atob(this.accessToken.split('.')[1]));
            this.fetch(user_data.sub);
        } else {
            this.router.navigate(['/auth/login'])
        }
    }

    async fetch(accountPk: number) {
        const options = {
            url: this.API + `/accounts/${accountPk}`,
            headers: {
                'Authorization': `Bearer ${this.accessToken}`,
            }
        };

        const response: HttpResponse = await CapacitorHttp.get(options);
        const profile_photo = response.data.user.user_document.filter((doc: any) => doc.type === 'profile_photo');
        const id_photo = response.data.user.user_document.filter((doc: any) => doc.type === 'id_photo');
        const seller_background_photo = [];  //response.data.user && response.data.user.seller_document && response.data.user.seller_document.filter((doc: any) => doc.type === 'profile_photo');

        const address = response.data.user.user_addresses.length > 0 ? (response.data.user.user_addresses.length > 1 ? response.data.user.user_addresses.filter((address: any) => address.default === true) : response.data.user.user_addresses[0]) : '';
        const complete_address = address.address + ' ' + address.area.name + ' ' + address.city.name + ' ' + address.province.name;

        this.user = {
            ...response.data.user,
            profile_photo: profile_photo.length > 0 ? this.API + '/' + profile_photo[0].document.path : 'https://ionicframework.com/docs/img/demos/avatar.svg',
            id_photo: id_photo.length > 0 ? this.API + '/' + id_photo[0].document.path : 'https://ionicframework.com/docs/img/demos/avatar.svg',
            seller_background_photo: seller_background_photo.length > 0 ? this.API + '/' + id_photo[0].document.path : this.API + '/assets/images/uploads/documents/1723878003464.eb8a5e8a-49e4-4a4f-8492-44620ddb3c44.06896395-786a-4aca-93a7-bd7d0408bdbc.f85ee995-7e87-4c4b-a120-f0dd584eba3f.7f1096b224e37d772.png',
            address: complete_address
        };
        console.log(this.user);
    }

    back() {
        this.location.back();
    }

    logout() {
        window.localStorage.removeItem('access_token');
        window.localStorage.removeItem('image');
        window.localStorage.removeItem('first_name');
        window.localStorage.removeItem('last_name');
        window.localStorage.removeItem('role_pk');
        window.localStorage.removeItem('seller_pk');
        this.router.navigate(['/auth/login']);
    }

    goto(page: string) {
        switch (page) {
            case 'post_looking_for':
                this.router.navigate([`/tabs/profile/post`], { state: this.user });
                break;
            case 'register_as_producer':
                this.router.navigate([`/tabs/profile/register`], { state: this.user });
                break;
            case 'producer_page':
                this.router.navigate([`/tabs/profile/producer_page`], { state: this.user });
                break;
            case 'recently_viewed':
                this.router.navigate([`/tabs/profile/recently_viewed`], { state: this.user });
                break;
            case 'faq':
                this.router.navigate([`/tabs/profile/faq`], { state: this.user });
                break;
            case 'feedback':
                this.openFeedbackModal(true);
                break;
            case 'complaint':
                this.openComplaintModal(true);
                break;
            case 'documentation':
                this.router.navigate([`/tabs/profile/documentation`], { state: this.user });
                break;
            default:
                break;
        }
    }

    openFeedbackModal(isOpen: boolean) {
        this.isFeedbackModalOpen = isOpen;
    }

    openComplaintModal(isOpen: boolean) {
        this.isComplaintModalOpen = isOpen;
    }
}
