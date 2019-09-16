import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosListsComponent } from './todos-lists/todos-lists.component';
import { TodosItemsComponent } from './todos-items/todos-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodosListsComponent,
    TodosItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
