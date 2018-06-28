webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_movies_movies__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__display_movies_display_movies__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(nav, moviesService, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.moviesService = moviesService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.peak = "";
        this.title = "";
        this.rank = 0;
        this.year = 0;
        this.worldWideGross = 0;
    }
    HomePage.prototype.goToSecond = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__display_movies_display_movies__["a" /* DisplayMoviesPage */]);
    };
    HomePage.prototype.findMovies = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Finding movies..."
        });
        loading.present();
        var options = {};
        // if(this.peak != ""){
        //   options.Peak = this.peak;
        // }
        // if(this.title != ""){
        //   options.Title = this.title;
        // }
        // if(this.rank != 0 || this.rank != null){
        //   options.Rank = this.rank;
        // }
        if (this.year != 0 || this.year != null) {
            options.Year = this.year;
        }
        // if(this.worldWideGross != 0){
        //   options.WorldwideGross = this.worldWideGross;
        // }
        //options.Rank = 3;
        this.moviesService.getMovies(options).then(function (data) {
            loading.dismiss();
            if (typeof (data[0]) === "undefined") {
                var alert = _this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'Sorry, no movies could be found for your search criteria.',
                    buttons: ['Ok']
                });
                alert.present();
            }
            else {
                //Need to push the movie display pagesea
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__display_movies_display_movies__["a" /* DisplayMoviesPage */], {
                    movies: data
                }).catch(function (err) { return console.log(err); });
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.moviesLessThanOneB = function (type) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Finding movies..."
        });
        loading.present();
        var options = {};
        switch (type) {
            case 1:
                options.WorldwideGross = { $lte: 1000000000 };
                break;
            case 2:
                options.WorldwideGross = { $gte: 1000000000, $lte: 2000000000 };
                break;
            case 3:
                options.WorldwideGross = { $gte: 2000000000 };
                break;
            default:
                break;
        }
        this.moviesService.getMovies(options).then(function (data) {
            loading.dismiss();
            if (typeof (data[0]) === "undefined") {
                var alert = _this.alertCtrl.create({
                    title: 'Oops!',
                    subTitle: 'Sorry, no movies could be found for your search criteria.',
                    buttons: ['Ok']
                });
                alert.present();
            }
            else {
                //Need to push the movie display pagesea
                _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__display_movies_display_movies__["a" /* DisplayMoviesPage */], {
                    movies: data
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/robertdates/Desktop/TopBlockbusterApp/blockbuster/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Search for the Top BlockBusters\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines>\n         <ion-item>\n             <ion-label>Year</ion-label>\n             <ion-select [(ngModel)]="year">\n               <!-- I know I can use a loop but couldnt get the syntax -->\n                 <ion-option [value]=null>N/A</ion-option>\n                 <ion-option [value]="1994">1994</ion-option>\n                 <ion-option [value]="1995">1995</ion-option>\n                 <ion-option [value]="1996">1996</ion-option>\n                 <ion-option [value]="1997">1997</ion-option>\n                 <ion-option [value]="1998">1998</ion-option>\n                 <ion-option [value]="1999">1999</ion-option>\n                 <ion-option [value]="2000">2000</ion-option>\n                 <ion-option [value]="2001">2001</ion-option>\n                 <ion-option [value]="2002">2002</ion-option>\n                 <ion-option [value]="2003">2003</ion-option>\n                 <ion-option [value]="2004">2004</ion-option>\n                 <ion-option [value]="2005">2005</ion-option>\n                 <ion-option [value]="2006">2006</ion-option>\n                 <ion-option [value]="2007">2007</ion-option>\n                 <ion-option [value]="2008">2008</ion-option>\n                 <ion-option [value]="2009">2009</ion-option>\n                 <ion-option [value]="2010">2010</ion-option>\n                 <ion-option [value]="2011">2011</ion-option>\n                 <ion-option [value]="2012">2012</ion-option>\n                 <ion-option [value]="2013">2013</ion-option>\n                 <ion-option [value]="2014">2014</ion-option>\n                 <ion-option [value]="2015">2015</ion-option>\n                 <ion-option [value]="2016">2016</ion-option>\n                 <ion-option [value]="2017">2017</ion-option>\n                 <ion-option [value]="2018">2018</ion-option>\n             </ion-select>\n         </ion-item>\n         <button (click)="findMovies()" ion-button>Search</button>\n\n     </ion-list>\n\n         <ion-label>Search by Gross</ion-label>\n\n\n       <button (click)="moviesLessThanOneB(1)" ion-button>$ <1B</button>\n       <button (click)="moviesLessThanOneB(2)" ion-button>1B <$<2B</button>\n       <button (click)="moviesLessThanOneB(3)" ion-button>$ >2B</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertdates/Desktop/TopBlockbusterApp/blockbuster/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_movies_movies__["a" /* MoviesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_movies_movies__["a" /* MoviesProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MoviesProvider = /** @class */ (function () {
    function MoviesProvider(http) {
        this.http = http;
        console.log('Hello MoviesProvider Provider');
    }
    MoviesProvider.prototype.getMovies = function (options) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('http://localhost:8080/api/movies', JSON.stringify(options), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    MoviesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], MoviesProvider);
    return MoviesProvider;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_display_movies_display_movies__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_movies_movies__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_display_movies_display_movies__["a" /* DisplayMoviesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_display_movies_display_movies__["a" /* DisplayMoviesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_movies_movies__["a" /* MoviesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_display_movies_display_movies__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.displaymoviespage = __WEBPACK_IMPORTED_MODULE_5__pages_display_movies_display_movies__["a" /* DisplayMoviesPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/robertdates/Desktop/TopBlockbusterApp/blockbuster/src/app/app.html"*/'<ion-nav #appNav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/robertdates/Desktop/TopBlockbusterApp/blockbuster/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayMoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DisplayMoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var DisplayMoviesPage = /** @class */ (function () {
    function DisplayMoviesPage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
        this.movies = this.navParams.get('movies');
    }
    DisplayMoviesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DisplayMoviesPage');
    };
    DisplayMoviesPage.prototype.closeWindow = function () {
        this.nav.pop();
    };
    DisplayMoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-display-movies',template:/*ion-inline-start:"/Users/robertdates/Desktop/TopBlockbusterApp/blockbuster/src/pages/display-movies/display-movies.html"*/'<!--\n  Generated template for the DisplayMoviesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>DisplayMovies</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let movie of movies">\n    <div class="card-title-container">\n      <p class="card-title">{{movie.Title}}</p>\n      <p class="room-description"> {{movie.Rank}} <ion-icon name="people"></ion-icon> {{movie.Year}} </p>\n    </div>\n</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/robertdates/Desktop/TopBlockbusterApp/blockbuster/src/pages/display-movies/display-movies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DisplayMoviesPage);
    return DisplayMoviesPage;
}());

//# sourceMappingURL=display-movies.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map