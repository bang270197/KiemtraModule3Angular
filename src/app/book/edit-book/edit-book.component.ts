import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../book.service';
import {Book} from '../../book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
book: Book;
message;
  constructor(private active: ActivatedRoute,
              private bookservice: BookService
              ) { }

  ngOnInit() {
    this.getBookById();
  }
  getBookById(): void {
    const id = +this.active.snapshot.paramMap.get('id');
    this.bookservice.getBookById(id).subscribe(book => this.book = book);
  }
  editBook() {
    // const {id, name} = formCustomer.value;
    // const customer = {id, name};
    this.bookservice.editCustomer(this.book).subscribe(() => {
      this.bookservice.getAllBook();
      this.message = 'Sua thanh cong';
    }, error => {
      this.message = error;
    });
  }
}
