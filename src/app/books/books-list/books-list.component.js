"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var books_list_service_1 = require("./books-list.service");
var BooksListComponent = (function () {
    function BooksListComponent(_bookservice) {
        this._bookservice = _bookservice;
    }
    BooksListComponent.prototype.ngOnInit = function () { this.getAllBooks(); };
    BooksListComponent.prototype.getAllBooks = function () {
        var _this = this;
        this._bookservice.getBooks().
            subscribe(function (response) { return _this.booksDetails = response; }, function (error) { return _this.errorLog = error; });
    };
    return BooksListComponent;
}());
BooksListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-books-list',
        templateUrl: 'books-list.component.html',
        styleUrls: ['books-list.component.css']
    }),
    __metadata("design:paramtypes", [books_list_service_1.BookService])
], BooksListComponent);
exports.BooksListComponent = BooksListComponent;
//# sourceMappingURL=books-list.component.js.map