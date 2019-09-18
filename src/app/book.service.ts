import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {
  }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '/' + id);
  }

  addBook(book: Book): Observable<any> {
    return this.http.post(this.apiUrl, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  editCustomer(book: Book): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(this.apiUrl + '/' + book.id, book, httpOption);
  }

}
