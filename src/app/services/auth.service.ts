import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;


  constructor(private fbAuth: AngularFireAuth, private router: Router) {
    this.user = fbAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails);
        }
        else {
          this.userDetails = null;
        }
      }
    );
  }

  login() {
    return this.fbAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  isLoggedIn() {
    return this.userDetails != null;
  }

  logout() {
    this.fbAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}


