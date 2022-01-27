import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {Book} from "../../model/book";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
book:Book[]=[]
  constructor(private _bookService:BookService,
              private router:Router
              ) { }
  ngOnInit(): void {
    this._bookService.getAll().subscribe(result =>{
      this.book=result;
    })
  }
  // @ts-ignore
  delete(id){
      this._bookService.delete(id).subscribe(()=>{
        this.ngOnInit()
      })
    }
}
