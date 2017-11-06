import { Book } from './Models/book.model';
import { BooksService } from './book.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'books',
    template: `
        <div *ngIf="books !== undefined">
            <div *ngFor="let bookFor of books">
                <span>Название: {{bookFor.name}}</span>
                <span>Автор: {{bookFor.author}}</span>
                <span>Год: {{bookFor.year}}</span>
            </div>
        </div>
        <div id="tableBlock"></div>
        <!--div id="editBlock">
            <p><b>Редактирование книги</b></p>
            <table>
                <tr><td><input  type="hidden" id="editId" [(ngModel)]="bookForEdit.id" /></td><td></td></tr>
                <tr><td><label>Название: </label></td><td><input [(ngModel)]="bookForEdit.name" type="text" id="editName" /></td></tr>
                <tr><td><label>Автор: </label></td><td><input type="text" id="editAuthor" [(ngModel)]="bookForEdit.author"/></td></tr>
                <tr><td><label>Год: </label></td><td><input type="number" id="editYear" [(ngModel)]="bookForEdit.year"/></td></tr>
            </table>
            <button id="editBook" (click)="editBook()">Сохранить</button>
        </div>
        <div id="createBlock">
            <p><b>Добавление книги</b></p>
            <table>
                <tr><td><label>Название: </label></td><td><input type="text" id="addName" [(ngModel)]="bookForAdd.name"/></td></tr>
                <tr><td><label>Автор: </label></td><td><input type="text" id="addAuthor" [(ngModel)]="bookForAdd.author"/></td></tr>
                <tr><td><label>Год: </label></td><td><input type="number" id="addYear" [(ngModel)]="bookForAdd.year"/></td></tr>
            </table>
            <button id="addBook" (click)="addBook()">Сохранить</button>
        </div!-->
    `,
    styleUrls: ['book.component.css'],
    moduleId: module.id
})
export class BooksComponent implements OnInit {
    private bookForEdit: Book;
    private bookForAdd: Book;
    private books: Book[];

    constructor(
        private _booksService: BooksService
    ) { }

    ngOnInit() {
        this._booksService.getAllBooks()
            .subscribe((books) => {
                this.books = books;
            });
    }

    editBook() {

    }

    addBook() {

    }
}
