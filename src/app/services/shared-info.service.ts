import { Injectable } from '@angular/core';
import {IPokemon} from "../models/IPokemon";

@Injectable({
  providedIn: 'root'
})
export class SharedInfoService {

  constructor() {
  }
  private pokemon: IPokemon;
  private previousPage: number;

  setPokemon(pokemon: IPokemon, page: number){
    this.pokemon = pokemon;
    this.previousPage = page;
  }
  getPokemon(): IPokemon{
    return this.pokemon;
  }
  getPreviousPage(): number{
    return this.previousPage;
  }
}
