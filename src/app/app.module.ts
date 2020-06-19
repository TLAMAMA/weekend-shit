
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { LikeComponentComponent } from './component/like-component/like-component.component';
import { CardComponentComponent } from './component/card-component/card-component.component';
import { CommentComponentComponent } from './component/comment-component/comment-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LikeComponentComponent,
    CardComponentComponent,
    CommentComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
