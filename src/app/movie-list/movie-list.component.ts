import { Component, OnInit } from '@angular/core';
import { OmdbServiceClient } from '../services/omdb.service.client';
import { DataService } from "../services/data.services";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

   title :String="";
   message:string;
  constructor(private omdbService: OmdbServiceClient,private data: DataService) { 
    // this.title=this.omdbService.getTitle();

  }
  

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
}
