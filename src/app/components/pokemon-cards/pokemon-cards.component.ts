import {Component, OnInit} from '@angular/core';
import {PokemonService} from 'src/app/services/pokemon.service';
import {Router} from "@angular/router";
import {SharedInfoService} from "../../services/shared-info.service";
import {IPokemon} from "../../models/IPokemon";

@Component({
  selector: 'app-pokemon-cards',
  templateUrl: './pokemon-cards.component.html',
  styleUrls: ['./pokemon-cards.component.css']
})
export class PokemonCardsComponent implements OnInit{

  constructor(public pokemonService: PokemonService, private router: Router, private shareService: SharedInfoService) {
  }
  p: number = 1;
  previous: string = "";
  next: string = "";
  nameFilter: string = "";
  imgFilter: "All" | "WithImage" | "WithoutImage";
  nameLengthFilterIsShown: boolean = false;
  fCheckBoxActive: boolean = false;
  sCheckBoxActive: boolean = false;
  tCheckBoxActive: boolean = false;

  async ngOnInit() {
    await this.pokemonService.getNewUsers();
    const [previousPage, previousNameFilter, previousImgFilter, fCheckBoxActive, sCheckBoxActive, tCheckBoxActive]
      = this.shareService.getPreviousPageInfo();
    if(isFinite(previousPage))
      this.p = previousPage;
    if(previousNameFilter !== undefined)
      this.nameFilter = previousNameFilter;
    if(previousImgFilter !== undefined)
      this.imgFilter = previousImgFilter;
    if(fCheckBoxActive !== undefined)
      this.fCheckBoxActive = fCheckBoxActive;
    if(sCheckBoxActive !== undefined)
      this.sCheckBoxActive = sCheckBoxActive;
    if(tCheckBoxActive !== undefined)
      this.tCheckBoxActive = tCheckBoxActive;
    this.initialiseCheckBoxes();
  }
  initialiseCheckBoxes(){
    const fCheckBox = document.getElementById("1-5 symbols") as HTMLInputElement;
    const sCheckBox = document.getElementById("6-10 symbols") as HTMLInputElement;
    const tCheckBox = document.getElementById(">10 symbols") as HTMLInputElement;
    fCheckBox.checked = this.fCheckBoxActive;
    sCheckBox.checked = this.sCheckBoxActive;
    tCheckBox.checked = this.tCheckBoxActive;
  }
  changeCheckBox(name: string){
    switch (name){
      case "firstCheckBox":
        this.fCheckBoxActive = !this.fCheckBoxActive;
        break;
      case "secondCheckBox":
        this.sCheckBoxActive = !this.sCheckBoxActive;
        break;
      default:
        this.tCheckBoxActive = !this.tCheckBoxActive;
    }
  }

  async getDetailedInfo(pokemon: IPokemon){
    this.shareService.setPokemon(pokemon, this.p, this.nameFilter, this.imgFilter,
        this.fCheckBoxActive, this.sCheckBoxActive, this.tCheckBoxActive);
    await this.router.navigate(["/about"]);
  }
}
