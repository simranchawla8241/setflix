import { Component, OnInit } from '@angular/core';
import { OmdbServiceClient } from '../services/omdb.service.client';
import { map, publishReplay, refCount ,startWith} from 'rxjs/operators';
import {NgbCarouselConfig, NgbAlertConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-omdb-test',
  templateUrl: './omdb-test.component.html',
  styleUrls: ['./omdb-test.component.css'],
  providers:[NgbCarouselConfig]
})
export class OmdbTestComponent implements OnInit 
{
   title:string;

   result:Object;
  //  searchMovie(title:String){
  //     this.omdbService.searchMovieByTitle(title)
  //     .subscribe((result)=>{
  //         this.result=result;
  //         console.log(result);
  //     });


  //  }
  constructor(private omdbService: OmdbServiceClient,config: NgbCarouselConfig) 
  {
    // this.omdbService.searchMovieByTitle("kalank")
    //   .subscribe((result)=>{
    //       this.result=result;
    //       console.log(result);
    //   });

      //carousel settings
      config.interval=3000;
      config.wrap=true;
      config.keyboard=false;
      config.pauseOnHover=false;


   }
   

  ngOnInit() 
  {
  }

}
