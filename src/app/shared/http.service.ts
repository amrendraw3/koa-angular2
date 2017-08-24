import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  get(url) {
    console.log('Get API called !');
    return this.http.get(url)
    .map((res:Response) => res.json());
    // return true;
  }
}
