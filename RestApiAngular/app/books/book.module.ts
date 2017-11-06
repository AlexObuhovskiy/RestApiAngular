import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BooksService } from './book.service';
import { BooksComponent } from './book.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ CommonModule ],
    declarations: [BooksComponent],
    providers: [BooksService],
    exports: [BooksComponent]
})
export class BooksModule { }
