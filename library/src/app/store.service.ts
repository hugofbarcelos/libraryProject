import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private store$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]> ([]);

  constructor(http: HttpClient) {
      http.get<Book[]>('books/books.json').subscribe(data => this.state = data);
  }

  set state(books:Book[]){
    this.store$.next(books);
  }

  getState(){
    return this.store$.asObservable();
  }

  updateState(newBooks$: any){
    return this.store$.next(newBooks$);
  }
}
