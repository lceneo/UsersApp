import {Component, OnInit} from '@angular/core';
import {IPokemon} from "../../models/IPokemon";
import {SharedInfoService} from "../../services/shared-info.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.css']
})
export class DetailedInfoComponent implements OnInit{
  constructor(private shareService: SharedInfoService,  private router: Router,) {
  }
  public pokemon: IPokemon;

  ngOnInit() {
    this.pokemon = this.shareService.getPokemon();
  }

  async returnToMainPage(){
    await this.router.navigate(["/"]);
  }
}
