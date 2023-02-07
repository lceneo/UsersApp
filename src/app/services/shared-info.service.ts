import { Injectable } from '@angular/core';
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class SharedInfoService {

  constructor() {
  }
  private user: IUser;

  setUser(user: IUser){
    this.user = user;
  }
  getUser(): IUser{
    return this.user;
  }
}
