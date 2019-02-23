import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ViewEncapsulation, Input } from '@angular/core';
import { Router, Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  isFormVisible = true;
  params;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.params = this.router.url;
    if (this.params === '/register') {
      this.isFormVisible = false;
    }

  }
  ngOnInit() {
  }

  // method to navigate to register page
  register() {
    this.router.navigateByUrl('/register');
  }
}
