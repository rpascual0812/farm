export interface User {
    pk?: number;
    uuid: string;
    last_name: string;
    first_name: string;
    middle_name: string;
    gender_pk: number;
    birthdate: Date;
    mobile_number: string;
    email_address: string;
    about: string;
    account_pk: number;
    role_pk: string;
    country_pk: number;
    is_seller: boolean;
    date_created: Date;
    archived?: boolean;
}