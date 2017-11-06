"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var book_service_1 = require("./book.service");
var book_component_1 = require("./book.component");
var core_1 = require("@angular/core");
var BooksModule = (function () {
    function BooksModule() {
    }
    return BooksModule;
}());
BooksModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [book_component_1.BooksComponent],
        providers: [book_service_1.BooksService],
        exports: [book_component_1.BooksComponent]
    })
], BooksModule);
exports.BooksModule = BooksModule;
//# sourceMappingURL=book.module.js.map