import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {

  book!:Book;
  id!:String;
  constructor(private bookService : BookService,private router:Router,private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.bookService.findById(this.id).subscribe(result => {
        console.log(result);
        this.book = result;
      },error => {
        console.log(error);
      })
    })
  }

  ngOnInit(): void {
  }
  back():void{
    this.router.navigate([""])
  }

}
