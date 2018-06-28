import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-display-movies',
  templateUrl: 'display-movies.html',
})
export class DisplayMoviesPage {
  movies: any;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.movies = this.navParams.get('movies');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayMoviesPage');
  }

  closeWindow() {
    this.nav.pop();
  }

}
