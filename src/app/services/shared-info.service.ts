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
  private nameFilter: string;
  private imgFilter: "All" | "WithImage" | "WithoutImage";
  private fCheckBoxActive: boolean = false;
  private sCheckBoxActive: boolean = false;
  private tCheckBoxActive: boolean = false;

  setPokemon(pokemon: IPokemon, page: number, nameFilter: string, imgFilter: "All" | "WithImage" | "WithoutImage",
             fCheckBoxActive: boolean,sCheckBoxActive: boolean,tCheckBoxActive: boolean){
    this.pokemon = pokemon;
    this.previousPage = page;
    this.nameFilter = nameFilter;
    this.imgFilter = imgFilter;
    this.fCheckBoxActive = fCheckBoxActive;
    this.sCheckBoxActive = sCheckBoxActive;
    this.tCheckBoxActive = tCheckBoxActive;
  }
  getPokemon(): IPokemon{
    return this.pokemon;
  }
  getPreviousPageInfo(): [number, string, "All" | "WithImage" | "WithoutImage", boolean, boolean, boolean]{
    return [this.previousPage, this.nameFilter, this.imgFilter, this.fCheckBoxActive, this.sCheckBoxActive, this.tCheckBoxActive];
  }
}
