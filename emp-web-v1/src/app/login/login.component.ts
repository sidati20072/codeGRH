import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,
              private router:Router,
              //private caddyService:CaddyService
  ) { }

  ngOnInit() {
  }

  onLogin(user){
    this.authService.login(user.username,user.password);
    if(this.authService.isAuthenticated()){
      //this.caddyService.loadCaddyFromLocalStorage();
      this.router.navigateByUrl('');
    }

  }

}

