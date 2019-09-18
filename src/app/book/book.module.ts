import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { ListComponent } from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  { path: 'add', component: AddBookComponent },
  {path: 'edit/:id', component: EditBookComponent},
  {path: 'list', component: ListComponent},
  {path: 'view/:id', component: ViewBookComponent}
]


@NgModule({
  declarations: [AddBookComponent, ViewBookComponent, EditBookComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class BookModule { }
