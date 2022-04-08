import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-products',
  template: `
  <section>

    <article ngClass="boo" *ngFor="let b of book">
      <h1>{{b.title}}</h1>
      <p>{{b.author}}</p>
      <img src="assets/livros/{{b.imageUrl}}">
      <h1> Already read:</h1>
      <button ngClass="alreadyRead">{{b.alreadyRead ? 'Yes' : 'No'}}</button>
      <button>Delete</button>
    </article>

  </section>

  `,
  styles: [`


    section {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .alreadyRead {
      display: flex;     
      padding: 3px 7px;
      border-radius: 5px;
      color: white;
      background-color: gray;
      text-decoration: none;
      font-size: 0.5em;
      border: 0;
      cursor: pointer;
      margin: 1em;
      text-align: center;
    }
    button {
      display: flex;
      justify-content: center;
      padding: 3px 7px;
      border-radius: 5px;
      color: white;
      background-color: gray;
      text-decoration: none;
      font-size: 0.5em;
      border: 0;
      cursor: pointer;
      margin: 1em;
      text-align: center;

    }
  `],
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
