import { Component } from '@angular/core';
import { OmdbServiceClient } from './services/omdb.service.client';
import {HttpClient} from '@angular/common/http';
import {movie} from './classes/movie';
import { NgxSpinnerService } from "ngx-spinner";
//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private omdbService: OmdbServiceClient,private spinner: NgxSpinnerService) {
    

}

listmovies:movie[];
ngOnInit()
{

    this.omdbService.searchMovieByTitle("2019").subscribe
    (
      data=>
      {
        this.listmovies=data;
      }
    );
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 1 second */
      this.spinner.hide();
    }, 1000);
}

}
