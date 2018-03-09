import { Component, OnInit } from '@angular/core';

import { BookService } from './books-list.service';
import { Ibook } from './../../../booksInterface/booksInterface';

@Component({
    moduleId: module.id,
    selector: 'app-books-list',
    templateUrl: 'books-list.component.html',
    styleUrls: ['books-list.component.css']
})

export class BooksListComponent implements OnInit {
    booksDetails: Ibook[];
    errorLog:string;
    constructor(private _bookservice:BookService) {}
    ngOnInit() {this.getAllBooks()}
    getAllBooks() {
        this._bookservice.getBooks().
        subscribe(
            response => this.booksDetails = response,
            error => this.errorLog = <any> error
        );
    }        
} 