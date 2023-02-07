import {Component, HostListener} from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public userService: UsersService) {
    window.addEventListener("scroll", () => {
      if(document.body.scrollHeight - window.scrollY <= window.innerHeight && !this.userService.isAdding)
        this.userService.getNewUsers();
    });
  }
  title = 'Embedika';
}
