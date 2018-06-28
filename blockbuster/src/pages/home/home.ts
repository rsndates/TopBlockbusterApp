import { Component} from '@angular/core';
import { NavController, LoadingController, AlertController  } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';
import { DisplayMoviesPage } from '../display-movies/display-movies';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    //Properties
  //  @ViewChild("appNav") nav: NavController;
    peak: any;
    rank: any;
    title: any;
    year: any;
    worldWideGross: any;

  constructor(public nav:NavController, public moviesService: MoviesProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
        this.peak = "";
        this.title = "";
        this.rank = 0;
        this.year = 0;
        this.worldWideGross = 0;
  }

  goToSecond() {
    this.nav.push(DisplayMoviesPage);
  }

  findMovies(){
    let loading = this.loadingCtrl.create({
            content: "Finding movies..."
        });
        loading.present();


    let options = <any>{};

    // if(this.peak != ""){
    //   options.Peak = this.peak;
    // }
    // if(this.title != ""){
    //   options.Title = this.title;
    // }
    // if(this.rank != 0 || this.rank != null){
    //   options.Rank = this.rank;
    // }
    if(this.year != 0 || this.year != null){
      options.Year = this.year;
    }
    // if(this.worldWideGross != 0){
    //   options.WorldwideGross = this.worldWideGross;
    // }

      //options.Rank = 3;

    this.moviesService.getMovies(options).then((data) => {

               loading.dismiss();

               if(typeof(data[0]) === "undefined"){
                   let alert = this.alertCtrl.create({
                       title: 'Oops!',
                       subTitle: 'Sorry, no movies could be found for your search criteria.',
                       buttons: ['Ok']
                   });

                   alert.present();
               } else {
                 //Need to push the movie display pagesea
                   this.nav.push(DisplayMoviesPage, {
                       movies: data
                   }).catch(err=>console.log(err));

               }

           }, (err) => {
               console.log(err);
           });

  }


  moviesLessThanOneB(type){
    let loading = this.loadingCtrl.create({
            content: "Finding movies..."
        });
        loading.present();

    let options = <any>{};

    switch(type){
      case 1:
      options.WorldwideGross = { $lte: 1000000000};
      break;
      case 2:
      options.WorldwideGross = { $gte: 1000000000,$lte: 2000000000};
      break;
      case 3:
      options.WorldwideGross = { $gte: 2000000000};
      break;
      default:
      break;
    }
    this.moviesService.getMovies(options).then((data) => {

               loading.dismiss();

               if(typeof(data[0]) === "undefined"){
                   let alert = this.alertCtrl.create({
                       title: 'Oops!',
                       subTitle: 'Sorry, no movies could be found for your search criteria.',
                       buttons: ['Ok']
                   });

                   alert.present();
               } else {
                 //Need to push the movie display pagesea
                 this.nav.push(DisplayMoviesPage, {
                     movies: data
                 });

               }

           }, (err) => {
               console.log(err);
           });

  }

}
