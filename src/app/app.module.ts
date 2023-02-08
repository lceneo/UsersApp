import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PokemonCardsComponent} from "./components/pokemon-cards/pokemon-cards.component";
import {DetailedInfoComponent} from "./components/detailed-info/detailed-info.component";
import {NgxPaginationModule} from "ngx-pagination"

@NgModule({
    declarations: [
        AppComponent,
        PokemonCardsComponent,
        DetailedInfoComponent
    ],
  imports: [
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
