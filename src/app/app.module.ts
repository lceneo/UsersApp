import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserCardsComponent} from "./components/user-cards/user-cards.component";
import {DetailedInfoComponent} from "./components/detailed-info/detailed-info.component";

@NgModule({
    declarations: [
        AppComponent,
        UserCardsComponent,
        DetailedInfoComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
