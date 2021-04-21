import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CardListComponent } from './component/card-list/card-list.component';
import { ImageDetailComponent } from './component/image-detail/image-detail.component';
import { HomeComponent } from './component/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    ImageDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
