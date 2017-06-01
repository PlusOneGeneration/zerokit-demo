import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (window.location.pathname.indexOf('sign-up') >= 0) {

    } else {
      this.router.navigate(['auth', 'sign-in']);
    }

  }
}
