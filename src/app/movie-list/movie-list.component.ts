import { Component, OnInit } from '@angular/core';
import { OmdbServiceClient } from '../services/omdb.service.client';
import { DataService } from "../services/data.services";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

   title :String="";
   movie_title:String;
   movie_year:String;
   movie_imdbId:String;
   movie_type:String;
   movie_poster:String;
   index:String;
    empty:boolean;
   message:string;
   public isViewable: boolean;
   public dataPresent: boolean;
  constructor(private omdbService: OmdbServiceClient,private data: DataService,private spinner: NgxSpinnerService) { 
    // this.title=this.omdbService.getTitle();

  }
  

  ngOnInit() {
    this.isViewable = true; 
    this.dataPresent=true;
    this.data.currentMessage.subscribe(message => this.message = message);

    var element=document.getElementsByClassName(".card-body");

    
  }
  public toggle(title,year,imdbId,type,poster,showdetails): void { 
   
    this.movie_title=title;
    this.movie_year=year;
    this.movie_imdbId=imdbId;
    this.movie_type=type;
    this.movie_poster=poster;
     
    // console.log("I am in toggle: "+this.movie);
    this.isViewable = !showdetails; 
    
  }

    toggle_to_search()
    {
      this.isViewable = !this.isViewable;
      this.openSpinner();
    }
    openSpinner()
    {
      this.spinner.show();
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 1000);
    }
    IsArrayEmpty()
    {
        this.empty=true;
    }

}
