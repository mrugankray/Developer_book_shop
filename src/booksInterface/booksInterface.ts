export interface Ibook {
    id:string;
    bookAuthor: string;
    bookTitle: string;
    productCode:number;
    bookPrice: number;
    publishedOn: Date;
    bookDesciption: string;
    genre:string;
    specifications:string;
    bookReviews: number;
    bookImageUrl: string;
    inStock: true;
    hardCover: string;
    starRating?:number;
}