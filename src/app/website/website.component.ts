import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css'],
  providers: [HttpService]
})
export class WebsiteComponent implements OnInit {

	title: string = "";
	content: string = "";

  constructor(private http: HttpService) { }

  ngOnInit() {
  	this.http.get("http://localhost:3000").subscribe(data => {
  		console.log(data);
  		this.title = data.name;
  		this.content = data.content;
  	});
  }

}
