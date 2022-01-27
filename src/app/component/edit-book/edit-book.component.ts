import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book !: Book;

  constructor(private _bookService: BookService,
              private _activatedRoute: ActivatedRoute,
              private _fb: FormBuilder,
              private _router: Router) {
  }
  form :FormGroup =this._fb.group({
    title:new FormControl(),
    author:new FormControl(),
    description:new FormControl(),
  })

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((paraMap: ParamMap) => {
      let id = paraMap.get('id')
      console.log(id)
      // @ts-ignore
      this._bookService.findById(id).subscribe(result => {
        this.book = result
        console.log(result)
      })
    })
    this.book={
      id:'',
      title:'',
      author:'',
      description:''
    }
  }
  update(){
    const book=this.form.value;
    console.log(book)
    this._bookService.edit(this.book.id,book).subscribe(()=>{
      this._router.navigate([""])
    })
  }
}
