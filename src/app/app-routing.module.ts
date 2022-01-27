import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListBookComponent} from "./component/list-book/list-book.component";
import {CreateBookComponent} from "./component/create-book/create-book.component";
import {EditBookComponent} from "./component/edit-book/edit-book.component";
import {DetailBookComponent} from "./component/detail-book/detail-book.component";

const routes: Routes = [
  {
    path: "",
    component: ListBookComponent
  },
  {
    path: "create",
    component: CreateBookComponent
  },
  {
    path:"edit/:id",
    component:EditBookComponent
  },{
  path:"detail",
    component:DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
