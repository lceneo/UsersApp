import {Pipe, PipeTransform} from '@angular/core';
import {IPokemon} from "../models/IPokemon";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemonsArray: IPokemon[], searchStr: string, imgFilter: "All" | "WithImage" | "WithoutImage",
  fCheckBoxActive: boolean, sCheckBoxActive: boolean, tCheckBoxActive: boolean): IPokemon[] {
    if(imgFilter === "All" || imgFilter === undefined) {
     return  pokemonsArray.filter(p => p.name.toLowerCase().startsWith(searchStr.toLowerCase())
       && this.nameIsSuitable(p, fCheckBoxActive, sCheckBoxActive, tCheckBoxActive));
    }
    else if(imgFilter === "WithImage") {
      return pokemonsArray.filter(p => Object.hasOwn(p, "image") && p.name.toLowerCase().startsWith(searchStr.toLowerCase())
        && this.nameIsSuitable(p, fCheckBoxActive, sCheckBoxActive, tCheckBoxActive));
    }
    return pokemonsArray.filter(p => !Object.hasOwn(p, "image") && p.name.toLowerCase().startsWith(searchStr.toLowerCase())
      && this.nameIsSuitable(p, fCheckBoxActive, sCheckBoxActive, tCheckBoxActive));
  }
  nameIsSuitable(pokemon: IPokemon, fCheckBoxActive: boolean, sCheckBoxActive: boolean, tCheckBoxActive: boolean):boolean{
    if(fCheckBoxActive === sCheckBoxActive && fCheckBoxActive === tCheckBoxActive)
      return true;
    return  (pokemon.name.length <= 5 && fCheckBoxActive) || (pokemon.name.length > 5 && pokemon.name.length <= 10 && sCheckBoxActive)
      || (pokemon.name.length > 10 && tCheckBoxActive);
  }
}
