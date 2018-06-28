import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

  constructor(public http: Http) {
    console.log('Hello MoviesProvider Provider');
  }

  getMovies(options){

    return new Promise(resolve => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/api/movies', JSON.stringify(options), {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });

  }

}
