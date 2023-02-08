import {Component} from '@angular/core';
import { PokemonService } from './services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public pokemonService: PokemonService) {
    window.addEventListener("scroll", () => {
      if(document.body.scrollHeight - window.scrollY <= window.innerHeight && !this.pokemonService.isAdding)
        this.pokemonService.getNewUsers();
    });
  }
  title = 'Embedika';
}
