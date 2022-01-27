import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ListBookComponent } from './component/list-book/list-book.component';
import { EditBookComponent } from './component/edit-book/edit-book.component';
import { CreateBookComponent } from './component/create-book/create-book.component';
import { DetailBookComponent } from './component/detail-book/detail-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    EditBookComponent,
    CreateBookComponent,
    DetailBookComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
