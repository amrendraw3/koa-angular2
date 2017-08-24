import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verifyUser() {
  	console.log('Verifying user!');
  	console.log('User has been verified!');
  	this.router.navigateByUrl('dashboard');
  }

}
