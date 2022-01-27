import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),

  });

  constructor(private _bookService: BookService,
              private _router:Router) {
  }

  ngOnInit(): void {
  }

  create() {
    const status = this.form.value;
    this._bookService.create(status).subscribe(() => {
      this._router.navigate([""])
    })
  }
}
