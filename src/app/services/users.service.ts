import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly userAddCount: number = 5;
  public readonly userArray: IUser[] = [];
  public isAdding: boolean = false;

  async getNewUsers(): Promise<void>{
    this.isAdding = true;
    const response = await fetch(`https://random-data-api.com/api/v2/users?size=${this.userAddCount}`);
    const result = await response.json() as IUser[];
    result.forEach(u => this.userArray.push(u));
    this.isAdding = false;
  }
}


