import {Component, OnInit} from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import {Router} from "@angular/router";
import {SharedInfoService} from "../../services/shared-info.service";


@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css']
})
export class PokemonCardsComponent implements OnInit{

  constructor(public pokemonService: PokemonService, private router: Router, private shareService: SharedInfoService) {
  }
  p: number = 1;
  async ngOnInit() {
    await this.pokemonService.getNewUsers();
    const previousPage = this.shareService.getPreviousPage();
    if(isFinite(previousPage))
      this.p = previousPage;
  }
  async getDetailedInfo(i: number){
    this.shareService.setPokemon(this.pokemonService.pokemonArray[i], this.p);
    await this.router.navigate(["/about"]);
  }
}
