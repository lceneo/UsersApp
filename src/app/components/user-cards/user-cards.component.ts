import {Component, OnInit} from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import {Router} from "@angular/router";
import {SharedInfoService} from "../../services/shared-info.service";


@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css']
})
export class UserCardsComponent implements OnInit{

  constructor(public usersService: UsersService, private router: Router, private shareService: SharedInfoService) {
  }
  async ngOnInit() {
    await this.usersService.getNewUsers();
  }
  async getDetailedInfo(i: number){
    this.shareService.setUser(this.usersService.userArray[i]);
    await this.router.navigate(["/about"]);
  }
}
