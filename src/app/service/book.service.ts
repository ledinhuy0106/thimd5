import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";
const api_url='http://localhost:3000/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor( private  _httpClient : HttpClient) { }

  getAll() :Observable<Book[]>{
    return this._httpClient.get<Book[]>(api_url)
  }
  // @ts-ignore
  findById(id) : Observable<Book>{
    // return this._httpClient.get<Book>(api_url+'/'+id)
    return this._httpClient.get<Book>(api_url+`/${id}`)
  }
  // @ts-ignore

  edit(id,book:Book) :Observable<Book>{

    return this._httpClient.put<Book>(api_url+'/'+id,book)
  }
  create(book:Book) : Observable<Book>{
    return this._httpClient.post<Book>(api_url,book)
  }
  // @ts-ignore
  delete(id):Observable<Book>{
    return this._httpClient.delete<Book>(api_url+'/'+id)
  }
}
