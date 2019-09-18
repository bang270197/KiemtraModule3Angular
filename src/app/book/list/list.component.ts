import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Book} from '../../book';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
sub: Subscription;
books: Book[];
total;
message;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAllBook();
  }
  getAllBook() {
    this.sub = this.bookService.getAllBook().subscribe(lisBook => {
      this.books = lisBook;
      this.total = this.books.length;
    });
  }
  deleteBook(id) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.getAllBook();
      this.message = 'Xoa thanh cong';
    }, error => {
      console.log(error);
    });
  }
}
