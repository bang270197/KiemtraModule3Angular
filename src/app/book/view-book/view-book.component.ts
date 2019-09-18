import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../book.service';
import {Book} from '../../book';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
book: Book;
  constructor(private active: ActivatedRoute,
              private bookService: BookService
              ) { }

  ngOnInit() {
    this.getCustomerById();
  }
  getCustomerById(): void {
    const id = +this.active.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(book => this.book = book);
  }
}
