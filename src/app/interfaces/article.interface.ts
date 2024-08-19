import { ArticleDocument } from "./article-document.interface";
import { User } from "./user.interface";

export interface Article {
    pk?: number;
    title: string;
    description: string;
    url: string;
    image?: string;
    article_document?: ArticleDocument;
    user_pk: number;
    user?: User;
    date_created?: Date;
    archived?: boolean;
}