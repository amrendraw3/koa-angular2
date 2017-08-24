import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { PagesComponent } from './pages/pages.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css', './dashboard.component.css'],
  providers: [HttpService]
})
export class DashboardComponent implements OnInit {

	pages = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
  	this.http.get("http://localhost:3000/website/all").subscribe(data => {
  		console.log(data);
  		this.pages = data;
  	});
  }

}