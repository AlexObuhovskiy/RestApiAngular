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
Object.defineProperty(exports, "__esModule", { value: true });
var book_service_1 = require("./book.service");
var core_1 = require("@angular/core");
var BooksComponent = (function () {
    function BooksComponent(_booksService) {
        this._booksService = _booksService;
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._booksService.getAllBooks()
            .subscribe(function (books) {
            _this.books = books;
        });
    };
    BooksComponent.prototype.editBook = function () {
    };
    BooksComponent.prototype.addBook = function () {
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    core_1.Component({
        selector: 'books',
        template: "\n        <div *ngIf=\"books !== undefined\">\n            <div *ngFor=\"let bookFor of books\">\n                <span>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: {{bookFor.name}}</span>\n                <span>\u0410\u0432\u0442\u043E\u0440: {{bookFor.author}}</span>\n                <span>\u0413\u043E\u0434: {{bookFor.year}}</span>\n            </div>\n        </div>\n        <div id=\"tableBlock\"></div>\n        <!--div id=\"editBlock\">\n            <p><b>\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043D\u0438\u0433\u0438</b></p>\n            <table>\n                <tr><td><input  type=\"hidden\" id=\"editId\" [(ngModel)]=\"bookForEdit.id\" /></td><td></td></tr>\n                <tr><td><label>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: </label></td><td><input [(ngModel)]=\"bookForEdit.name\" type=\"text\" id=\"editName\" /></td></tr>\n                <tr><td><label>\u0410\u0432\u0442\u043E\u0440: </label></td><td><input type=\"text\" id=\"editAuthor\" [(ngModel)]=\"bookForEdit.author\"/></td></tr>\n                <tr><td><label>\u0413\u043E\u0434: </label></td><td><input type=\"number\" id=\"editYear\" [(ngModel)]=\"bookForEdit.year\"/></td></tr>\n            </table>\n            <button id=\"editBook\" (click)=\"editBook()\">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>\n        </div>\n        <div id=\"createBlock\">\n            <p><b>\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043A\u043D\u0438\u0433\u0438</b></p>\n            <table>\n                <tr><td><label>\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: </label></td><td><input type=\"text\" id=\"addName\" [(ngModel)]=\"bookForAdd.name\"/></td></tr>\n                <tr><td><label>\u0410\u0432\u0442\u043E\u0440: </label></td><td><input type=\"text\" id=\"addAuthor\" [(ngModel)]=\"bookForAdd.author\"/></td></tr>\n                <tr><td><label>\u0413\u043E\u0434: </label></td><td><input type=\"number\" id=\"addYear\" [(ngModel)]=\"bookForAdd.year\"/></td></tr>\n            </table>\n            <button id=\"addBook\" (click)=\"addBook()\">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>\n        </div!-->\n    ",
        styleUrls: ['book.component.css'],
        moduleId: module.id
    }),
    __metadata("design:paramtypes", [book_service_1.BooksService])
], BooksComponent);
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=book.component.js.map