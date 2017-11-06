import { Book } from './Models/book.model';
import { ConverterService } from './../converter.service';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BooksService {
    constructor(
        private http: Http,
        private _converter: ConverterService
    ) { }

    getAllBooks(): Observable<Book[]> {
        let content = "";
        return this.http
            .get('/api/books')
            .map(response => {
                console.log(response);
                let books: Book[] = [];
                let booksObj: any[] = response.json();
                console.log(123);
                booksObj.forEach(bookObj => {
                    books.push(this._converter.toBook(bookObj))
                });

                return books;
            });
    }
}