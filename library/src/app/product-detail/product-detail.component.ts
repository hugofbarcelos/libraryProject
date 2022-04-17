import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  book!: Observable<Book[]>;
  bookServices!: BookService;
  productId: String | null;
  
  constructor(private route: ActivatedRoute,private bookService : BookService) { 

    this.productId = route.snapshot.paramMap.get("id");
    this.book = this.bookServices.getBookById(Number(this.productId));
    console.log(this.book);
  }

  ngOnInit(): void {
  }

}
