import { Component } from '@angular/core';
import { OmdbServiceClient } from './services/omdb.service.client';
import {HttpClient} from '@angular/common/http';
import {movie} from './classes/movie';
//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Netflix';
constructor(private omdbService: OmdbServiceClient) {
    

}

listmovies:movie[];
ngOnInit(){

  this.omdbService.searchMovieByTitle("2019").subscribe
  (
    data=>
    {
      this.listmovies=data;
    }
  );
}
}
