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
var book_model_1 = require("./books/Models/book.model");
var core_1 = require("@angular/core");
var ConverterService = (function () {
    function ConverterService() {
    }
    ConverterService.prototype.toBook = function (obj) {
        var book = new book_model_1.Book();
        book.id = obj.Id;
        book.name = obj.Name;
        book.author = obj.Author;
        book.year = obj.Year;
        return book;
    };
    return ConverterService;
}());
ConverterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConverterService);
exports.ConverterService = ConverterService;
//# sourceMappingURL=converter.service.js.map