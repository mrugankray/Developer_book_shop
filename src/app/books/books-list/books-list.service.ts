import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Http, Response } from '@angular/http';

import { Ibook } from './../../../booksInterface/booksInterface';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookService {
    constructor(private _http: Http) { }
    getBooks(): Observable<Ibook[]> {
        return this._http.get('api/books/books.json')
        .map((response: Response ) => <Ibook[]>response.json())
        //.do(data => console.log(data))
        .catch(this.handleError);
    }
    getBook(id: string): Observable<Ibook> {
        return this.getBooks()
        .map((books: Ibook[]) => books.find(book => book.id === id))
        .do(data => console.log(data));
      }
    
        private handleError(error: Response) {
        console.error(error);
        let message = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(message);
      }
}