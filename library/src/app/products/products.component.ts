import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-products',
  template: `
    <article *ngFor="let b of book">
      <h1> Title {{b.title}}</h1>
      <p>Author: {{b.author}}</p>
      <img src="assets/livros/{{b.imageUrl}}">
    </article>
  `,
  styleUrls: ['./products.component.css'],
  providers: [{provide: BookService, useClass: BookService}],
})
export class ProductsComponent implements OnInit {

  book!: Book[];
  
  constructor(book: BookService) {
      this.book = book.getBooks();
  }

  ngOnInit(): void {
  }

}
