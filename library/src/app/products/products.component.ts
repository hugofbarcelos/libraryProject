import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [{provide: BookService, useClass: BookService}],
})
export class ProductsComponent implements OnInit {

  book!: Book[];
  book$!: Observable<Book[]>;
  bookServices!: BookService;
  
  constructor(private bookService : BookService) {
      this.bookServices = bookService;
  }

  ngOnInit(): void {
    this.book = this.bookServices.getBooks();
  }

  deleteItem(id: number){
    this.book = this.bookServices.getBooks().filter(b => b.id !== id);
  }

  filtered(){
    this.book = this.bookServices.getBooks().filter(({ alreadyRead }) => alreadyRead == true);
  }

  unfiltered(){
    this.book = this.bookService.getBooks().filter(b => b.alreadyRead !== true);
  }
}
