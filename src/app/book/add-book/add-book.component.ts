import {Component, OnInit} from '@angular/core';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  message;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  AddBook(FormBook) {
    const {id, title, author, description} = FormBook.value;
    const book = {id, title, author, description};
    this.bookService.addBook(book).subscribe(() => {
      this.bookService.getAllBook();
      this.message = 'Them thanh cong';
    }, error => {
      this.message = error;
    });
  }
}
