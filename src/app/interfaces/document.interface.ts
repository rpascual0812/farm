export interface Document {
    pk?: number;
    original_name: string;
    filename: string;
    path: string;
    mime_type: string;
    size: string;
    date_created: Date;
    archived?: boolean;
}