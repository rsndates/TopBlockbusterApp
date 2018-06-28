import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayMoviesPage } from './display-movies';

@NgModule({
  declarations: [
    DisplayMoviesPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayMoviesPage),
  ],
})
export class DisplayMoviesPageModule {}
