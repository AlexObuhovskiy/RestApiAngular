import { HttpModule, Http } from '@angular/http';
import { ConverterService } from './converter.service';
import { BooksModule } from './books/book.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, BooksModule, HttpModule, FormsModule],
  exports: [BrowserModule],
  declarations: [AppComponent],
  providers: [ConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
