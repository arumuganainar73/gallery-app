import { isSuccess } from '@angular/http/src/http_utils';
import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
@Component({
    selector: 'page-books',
    templateUrl: 'books.html'
})
export class BooksPage {
    books: Array<{ id: number, imgUrl: string, bookUrl: string, page: number }>;

    constructor(public navCtrl: NavController, private fileOpener: FileOpener, private platform: Platform) {
        this.platform = platform;

         this.books = [{
            id: 1,
            imgUrl: "assets/books/wof.jpg",
            bookUrl: 'assets/books/wings-of-fire.pdf',
            page: 1
        }, {
            id: 2,
            imgUrl: "assets/books/india2020.jpg",
            bookUrl: 'assets/books/india2020.pdf',
            page: 1
        }];

    }
    openPdf(url) {
        this.fileOpener.open(url, 'application/pdf')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error openening file', e));

    }

}
