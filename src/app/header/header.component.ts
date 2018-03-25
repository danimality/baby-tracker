import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }

  public user;
  public userDetails;
  ngOnInit() {
  }

  login() {
    this.auth.login().then(
      details => {
        this.userDetails = details;
        this.user = this.userDetails.user;
      }
    );
  }

  logout() {
    this.auth.logout();
  }
}
