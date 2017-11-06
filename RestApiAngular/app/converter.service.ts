import { Book } from './books/Models/book.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ConverterService {

    constructor() { }

    public toBook(obj: any): Book {
        let book = new Book();
        book.id = obj.Id;
        book.name = obj.Name;
        book.author = obj.Author;
        book.year = obj.Year;

        return book;
    }
}