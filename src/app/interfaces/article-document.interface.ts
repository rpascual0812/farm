import { Document } from "./document.interface";

export interface ArticleDocument {
    pk?: number;
    user_pk: number;
    article_pk: number;
    type: string;
    document_pk: number;
    date_created: Date;
    document: Document;
}