import { Injectable } from '@angular/core';
import TCGdex from '@tcgdex/sdk';
import { IPokemon } from '../models/IPokemon';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  public  pokemonArray: IPokemon[] = [];
  public isAdding: boolean = false;

  async getNewUsers(): Promise<void>{
    const tcgdex = new TCGdex('en');
    this.pokemonArray = await tcgdex.fetchCards() as any[];
  }
}


