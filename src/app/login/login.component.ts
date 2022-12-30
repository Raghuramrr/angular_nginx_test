import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
    constructor(private userService: UserService) {
    }

    login() {
        this.userService.login().subscribe()
      }

    onClick() {
        this.login()
        }
}