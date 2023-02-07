import {Component, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {SharedInfoService} from "../../services/shared-info.service";


@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.css']
})
export class DetailedInfoComponent implements OnInit{
  constructor(private shareService: SharedInfoService) {
  }
  public user: IUser;
  ngOnInit(): void {
    this.user = this.shareService.getUser();
  }
}
