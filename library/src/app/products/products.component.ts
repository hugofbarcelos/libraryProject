import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, interval, Observable, of, switchMap } from 'rxjs';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [{provide: BookService, useClass: BookService}],
})
export class ProductsComponent implements OnInit {


  book$!: Observable<Book[]>;
  bookServices!: BookService;
  searchInput: FormControl = new FormControl('');

  constructor(private bookService : BookService) {
      this.book$ = bookService.getBooks();
  }

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      switchMap(a => a.length>0 ? this.bookService.searchBook(a, this.book$): this.handleFilterBook())
    ).subscribe({
      next: resp => this.book$ = of(resp),
      error: err => console.log('erro')
  } );
  }

  @ViewChild('read') read!: ElementRef;
  @ViewChild('notRead') notRead!: ElementRef;
  @ViewChild('all') all!: ElementRef;
  @ViewChild('searchbar') searchbar!: ElementRef;
  handleFilterBook(): Observable<Book[]>{

    if (this.read.nativeElement.checked){
      this.searchInput.setValue("")
      this.book$ = this.bookService.filterBook(true);

    }else if (this.notRead.nativeElement.checked){
      this.searchInput.setValue("")
      this.book$ = this.bookService.filterBook(false);

    }else{
      this.searchInput.setValue("")
      this.book$ = this.bookService.getBooks();

    }

    return this.book$;
  }


  handleDelete(id: number) : any {
    this.bookService.deleteBook(Number(id));
  }

}
