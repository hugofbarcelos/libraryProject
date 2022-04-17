import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../app/book.model';
import { StoreService } from './store.service';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private state: StoreService){

  }

  getBooks(): Observable<Book[]> {
    return this.state.getState();
  }

  getBookById(bookId: number): Observable<Book[]>{
    return this.getBooks().pipe(map(res =>res.filter( b => b.id === bookId)));
  } 

  deleteBook(id:number){
    let newBooks = this.getBooks().pipe(map(res =>res.filter( b => b.id !== id)));
    return newBooks.subscribe(a => this.state.updateState(a));
  }

  filterBook(alreadyRead: boolean){
    return this.getBooks().pipe(map(res =>res.filter( b => b.alreadyRead === alreadyRead)));
  }

  searchBook(input: string, fbook: Observable<Book[]>){
    return fbook.pipe(map(res =>res.filter( b => b.title.toLowerCase().includes(input.toLowerCase()) )));
  }

}
