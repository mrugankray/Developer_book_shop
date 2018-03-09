import { AppComponent }  from './app.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BookService } from './books/books-list/books-list.service';
import{BooksListComponent} from './books/books-list/books-list.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { desciptionPipe } from './shared/descriptionPipe';
import { favouriteComponent } from './favourite/favouriteComponent';
@NgModule({
  imports:      [ BrowserModule , FormsModule , HttpModule , RouterModule.forRoot([
    {path:'welcome',component:WelcomeComponent},
    {path:'books',component:BooksListComponent},
    {path:'books/:id',component:BookDetailsComponent},
    {path:'',redirectTo:'welcome',pathMatch:'full'},
    {path:'**',redirectTo:'welcome',pathMatch:'full'}
  ])],
  declarations: [ AppComponent , BooksListComponent , desciptionPipe 
    , favouriteComponent , WelcomeComponent , BookDetailsComponent],
  bootstrap:    [ AppComponent ],
  providers: [BookService]
})
export class AppModule { }
