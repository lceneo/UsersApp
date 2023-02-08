import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedInfoComponent } from './components/detailed-info/detailed-info.component';
import { PokemonCardsComponent } from './components/pokemon-cards/pokemon-cards.component';

const routes: Routes = [
  { path: '', component: PokemonCardsComponent },
  { path: 'about', component: DetailedInfoComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
