import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PokemonCardsComponent} from "./components/pokemon-cards/pokemon-cards.component";
import {DetailedInfoComponent} from "./components/detailed-info/detailed-info.component";
import {NgxPaginationModule} from "ngx-pagination"
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        PokemonCardsComponent,
        DetailedInfoComponent,
        FilterPipe
    ],
    imports: [
        NgxPaginationModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
